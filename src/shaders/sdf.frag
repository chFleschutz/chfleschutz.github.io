uniform float uTime;
uniform vec2 uResolution;

varying vec3 vPosition;

// Raymarching
const int maxSteps = 100;
const float maxDistance = 100.0;
const float surfaceDistance = 0.001;
const float epsilon = 0.0001;

// Lighting
struct Light
{
    vec3 direction;
    vec3 color;
};

struct Material
{
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    float shininess;
};

const Light light = Light(
    vec3(-0.5, 1.0, 1.0), 
    vec3(0.8));

const Material material = Material(
    vec3(0.1), 
    vec3(0.2, 0.5, 0.8), 
    vec3(0.5), 
    32.0);

float smoothUnion(float a, float b, float k)
{
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float sphere(vec3 origin, float radius, vec3 pos)
{
    return length(pos - origin) - radius;
}

float computeSDF(vec3 pos)
{
    float s1 = sphere(vec3(sin(uTime), 0.0, 0.0), 1.0, pos);
    float s2 = sphere(vec3(cos(uTime), 1.0, 0.0), 0.6, pos);
    float s3 = sphere(vec3(-0.9, sin(uTime + 0.5), 0.0), 0.7, pos);
    return smoothUnion(smoothUnion(s1, s2, 1.0), s3, 1.0);
}

vec3 computeNormal(vec3 pos)
{
    float dx = computeSDF(pos + vec3(epsilon, 0.0, 0.0)) - computeSDF(pos - vec3(epsilon, 0.0, 0.0));
    float dy = computeSDF(pos + vec3(0.0, epsilon, 0.0)) - computeSDF(pos - vec3(0.0, epsilon, 0.0));
    float dz = computeSDF(pos + vec3(0.0, 0.0, epsilon)) - computeSDF(pos - vec3(0.0, 0.0, epsilon));
    return normalize(vec3(dx, dy, dz));
}

vec3 computeLighting(vec3 normal, vec3 viewDir)
{
    // Blinn-Phong shading
    vec3 halfVector = normalize(light.direction + viewDir);

    vec3 ambient = material.ambient * light.color;
    vec3 diffuse = material.diffuse * light.color * max(dot(normal, light.direction), 0.0);
    vec3 specular = material.specular * light.color * pow(max(dot(normal, halfVector), 0.0), material.shininess);
    return ambient + diffuse + specular;
}

void main()
{
    
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

    vec3 rayOrigin = vec3(0.0, 0.0, 5.0);
    vec3 rayDirection = normalize(vec3(uv, -1.0));

    float t = 0.0;
    float d = 0.0;
    vec3 pos = vec3(0.0);
    for (int i = 0; i < maxSteps; i++)
    {
        pos = rayOrigin + rayDirection * t;

        d = computeSDF(pos);
        if (d < surfaceDistance)
            break;

        t += d;
        if (t > maxDistance)
            discard;
    }

    vec3 viewDir = normalize(rayOrigin - pos);
    vec3 normal = computeNormal(pos);
    vec3 color = computeLighting(normal, viewDir);

    gl_FragColor = vec4(color, 1.0);
}

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

out vec4 outColor;

// Raymarching
const int maxSteps = 30;
const float maxDistance = 10.0;
const float surfaceDistance = 0.01;

// Controls
const float mouseAttraction = 1.1;

// Colors
const vec4 blobColor = vec4(0.161, 0.502, 0.725, 1.0); 
const int stepOffset = 2;
const int maxStepOffset = 5;

float smoothUnion(float a, float b, float k)
{
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float sphere(vec3 origin, float radius, vec3 pos)
{
    return length(pos - origin) - radius;
}

float elipsoid(vec3 origin, vec3 size, vec3 pos)
{
    return length((pos - origin) / size) - 1.0;
}

float ripple(vec3 pos, vec3 origin, float frequency, float amplitude, float speed)
{
    float d = length(pos - origin);
    return sin(frequency * d - speed * uTime) * amplitude;
}

float computeSDF(vec3 pos)
{
    vec2 attractionPoint = uMouse * mouseAttraction;
    attractionPoint.x *= uResolution.x / uResolution.y;

    float s1 = elipsoid(vec3(0.2 * sin(uTime * 0.55), 0.0, 0.5), vec3(2, 1.3, 1.0), pos);
    float s2 = sphere(vec3(cos(uTime * 0.45), sin(uTime * 0.45), 0.5), 0.6, pos);
    float s3 = sphere(vec3(-1.0, 0.8 * sin(uTime + 0.1), 0.0), 0.7, pos);
    float s4 = sphere(vec3(0.8, 0.6 * cos(uTime * 0.77), 0.5), 0.8, pos);
    float s5 = sphere(vec3(attractionPoint, 0.1), 0.7, pos)
        + ripple(pos, vec3(attractionPoint, 0.7), 50.0, 0.03, 7.0);

    float d = s1;
    d = smoothUnion(d, s3, 0.7);
    d = smoothUnion(d, s2, 0.7);
    d = smoothUnion(d, s4, 0.7);
    d = smoothUnion(d, s5, 0.7);
    return d;
}

void main()
{
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

    vec3 rayOrigin = vec3(0.0, 0.0, 5.0);
    vec3 rayDir = normalize(vec3(uv, -1.0));

    float t = 0.0;
    float d = 0.0;
    vec3 pos = vec3(0.0);

    int i = 0;
    for (i = 0; i < maxSteps; i++)
    {
        pos = rayOrigin + rayDir * t;

        d = computeSDF(pos);
        if (d < surfaceDistance)
            break;

        t += d;
        if (t > maxDistance)
            discard;
    }

    float alpha = clamp(float(i - stepOffset) / float(maxSteps - maxStepOffset), 0.0, 1.0);
    outColor = blobColor * alpha;
}

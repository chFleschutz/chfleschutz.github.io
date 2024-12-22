uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec3 vPosition;

// Raymarching
const int maxSteps = 30;
const float maxDistance = 10.0;
const float surfaceDistance = 0.001;
const float epsilon = 0.0005;

// Controls
const float mouseAttraction = 1.5;

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
    float s1 = sphere(
        vec3(0.25 * sin(uTime), 0.0, 0.5), 
        1.2, 
        pos);
    float s2 = sphere(
        vec3(cos(uTime * 0.5), sin(uTime * 0.5), 0.5), 
        0.6, 
        pos);
    float s3 = sphere(
        vec3(-0.9, 0.7 * sin(uTime + 0.5), 0.0), 
        0.7, 
        pos);
    float s4 = sphere(
        vec3(0.8, 0.5 * cos(uTime) - 0.5, 0.5), 
        0.7, 
        pos);
    float s5 = sphere(
        vec3(uMouse * mouseAttraction, 0.5), 
        0.5, 
        pos);

    float d = s1;
    d = smoothUnion(d, s3, 0.7);
    d = smoothUnion(d, s2, 0.7);
    d = smoothUnion(d, s4, 0.7);
    d = smoothUnion(d, s5, 1.0);
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

    vec3 color = mix(vec3(0.0), vec3(0.9), float(i) / float(maxSteps));
    gl_FragColor = vec4(color, 1.0);
}

uniform float time;

varying vec3 vPosition;

const int maxSteps = 100;
const float maxDistance = 100.0;
const float surfaceDistance = 0.01;
const float epsilon = 0.0001;

float sphere(vec3 origin, float radius, vec3 pos)
{
    return length(pos - origin) - radius;
}

float computeSDF(vec3 pos)
{
    float s1 = sphere(vec3(0.0, 0.0, 0.0), 1.0, pos);
    return s1;
}

void main()
{
    vec2 uv = vPosition.xy;

    vec3 rayOrigin = vec3(0.0, 0.0, 3.0);
    vec3 rayDirection = normalize(vec3(uv, -1.0));

    float t = 0.0;
    float d = 0.0;
    for (int i = 0; i < maxSteps; i++)
    {
        vec3 p = rayOrigin + rayDirection * t;

        d = computeSDF(p);
        if (d < surfaceDistance)
            break;

        t += d;

        if (t > maxDistance)
            break;
    }

    if (d < surfaceDistance)
    {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    else
    {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
}

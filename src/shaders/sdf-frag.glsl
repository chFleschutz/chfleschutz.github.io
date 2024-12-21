varying vec3 vPosition;
uniform float time;

void main()
{
    gl_FragColor=vec4(abs(sin(vPosition+time)),1.);
}

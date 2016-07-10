precision highp float;

uniform float iGlobalTime;
uniform vec2 iResolution;

void main()
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    gl_FragColor = vec4(uv, 0.5 + sin(iGlobalTime) * 0.5, 1.0);
}

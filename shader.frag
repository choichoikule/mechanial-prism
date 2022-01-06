#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vTexCoord;

void main() {

    // vec2 st = gl_FragCoord.xy/u_resolution.xy

    // In shaders, the RGB color goes from 0 - 1 instead of 0 - 255
    // vec3 yellow = vec3(1,1,0)
    // vec3 cyan = vec3(0,1,0.98)
    // vec3 magenta = vec3(1,0,0.94)
    // vec3 black = vec3(0,0,0)
//   vec2 coord = vTexCoord;
// gl_FragColor = vec4(coord.x, coord.y, (coord.x+coord.y), 1.0 );
    // gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = vec4(color, 1.0);

    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(0,2,4));
    gl_FragColor = vec4(vec3(col), 1.0);
}


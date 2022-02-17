const STEP_DIFFERENCE = 20;
const OBJECTS = [];
const SPREAD = 15;
const LIGHT_COLOR =  '#FFFFFF';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 25 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(LIGHT_COLOR);
document.body.appendChild( renderer.domElement );

function changeCameraPosition() {
  camera.position.set(0, STEP_DIFFERENCE * currentSlideNumber, 25);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

function addObject(x, y, object) {
  object.position.x = x * SPREAD;
  object.position.y = y * SPREAD;

  scene.add(object);
  OBJECTS.push(object);
}

function render(time) {
  time *= 0.001;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  OBJECTS.forEach((object) => {
    const speed = 0.5;
    const rotation = time * speed;
    object.rotation.x = rotation;
    object.rotation.y = rotation;
  });

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

function createMaterial() {
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });

  const hue = 1;
  const saturation = 1;
  const luminance = .5;
  material.color.setHSL(hue, saturation, luminance);

  return material;
}

function addSolidGeometry(x, y, geometry) {
  const mesh = new THREE.Mesh(geometry, createMaterial());
  addObject(x, y, mesh);
}

function addLineGeometry(x, y, geometry) {
  const material = new THREE.LineBasicMaterial({color: 0x000000});
  const mesh = new THREE.LineSegments(geometry, material);
  addObject(x, y, mesh);
}

{
  const color = LIGHT_COLOR;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

{
  const color = LIGHT_COLOR;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(1, -2, -4);
  scene.add(light);
}

//SLIDE 1
{
  const radius = 4;
  addSolidGeometry(-1.2, 0.2, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 4;
  addSolidGeometry(1.2, -0.4, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 3;
  addSolidGeometry(0.6, 0.5, new THREE.OctahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(-0.6, -0.4, new THREE.OctahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(-0.5, 0.4, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(0.6, -0.4, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(-0.9, -0.2, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(0.8, 0.2, new THREE.IcosahedronGeometry(radius));
}

{
  const width = 8;
  const height = 8;
  const depth = 8;
  addLineGeometry(0, 0, new THREE.WireframeGeometry(new THREE.BoxGeometry(width, height, depth)));
}

{
  const radius = 3;
  const detail = 3;
  addLineGeometry(0, 0, new THREE.DodecahedronGeometry(radius, detail));
}

//SLIDE 2

{
  const radius = 5;
  addSolidGeometry(1, 1.2, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(0.6, 1.8, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 4;
  addSolidGeometry(-1, 1.5, new THREE.IcosahedronGeometry(radius));
}

//SLIDE 3
{
  const radius = 3;
  addSolidGeometry(1, 3, new THREE.DodecahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(-1, 2.8, new THREE.DodecahedronGeometry(radius));
}

{
  const radius = 2;
  addSolidGeometry(0.9, 2.3, new THREE.DodecahedronGeometry(radius));
}

//SLIDE 4
{
  const length = 5;
  addSolidGeometry(-1, 3.9, new THREE.BoxGeometry(length, length, length));
}

{
  const length = 4;
  addSolidGeometry(1, 4.4, new THREE.BoxGeometry(length, length, length));
}

//SLIDE 5
{
  const length = 4;
  addSolidGeometry(-1, 5.0, new THREE.OctahedronGeometry(length));
}

{
  const length = 3;
  addSolidGeometry(0.9, 5.8, new THREE.OctahedronGeometry(length));
}

{
  const length = 2;
  addSolidGeometry(1.1, 5.1, new THREE.OctahedronGeometry(length));
}

//SLIDE 6
{
  const length = 4;
  addSolidGeometry(-1, 7.0, new THREE.OctahedronGeometry(length));
}

{
  const length = 5;
  addSolidGeometry(1.1, 6.6, new THREE.OctahedronGeometry(length));
}

//SLIDE 7
{
  const radius = 3;
  const detail = 2;
  addLineGeometry(-1.1, 8.4, new THREE.IcosahedronGeometry(radius, detail));
}

{
  const radius = 4;
  const detail = 2;
  addLineGeometry(1, 8, new THREE.IcosahedronGeometry(radius, detail));
}

//SLIDE 8
{
  const radius = 5;
  addLineGeometry(-1.1, 9.5, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 4;
  addLineGeometry(1, 9.0, new THREE.IcosahedronGeometry(radius));
}

//SLIDE 9
{
  const radius = 5;
  const detail = 2;
  addLineGeometry(-1.1, 10.6, new THREE.OctahedronGeometry(radius, detail));
}

{
  const radius = 4;
  const detail = 2;
  addLineGeometry(1.2, 11.0, new THREE.OctahedronGeometry(radius, detail));
}

{
  const radius = 3;
  const detail = 2;
  addLineGeometry(1.0, 10.2, new THREE.OctahedronGeometry(radius, detail));
}

//SLIDE 10
{
  const length = 5;
  const segments = 3;
  addLineGeometry(-1.1, 12.4, new THREE.BoxGeometry(length, length, length, segments, segments, segments));
}

{
  const length = 5;
  const segments = 2;
  addLineGeometry(1.1, 12, new THREE.BoxGeometry(length, length, length, segments, segments, segments));
}

{
  const length = 2;
  const segments = 1;
  addLineGeometry(-0.9, 11.5, new THREE.BoxGeometry(length, length, length, segments, segments, segments));
}

//SLIDE 11
{
  const radius = 5;
  addLineGeometry(-1.1, 13.0, new THREE.TetrahedronGeometry(radius));
}

{
  const radius = 2;
  addLineGeometry(-0.9, 13.7, new THREE.TetrahedronGeometry(radius));
}

{
  const radius = 5;
  addLineGeometry(1.1, 13.6, new THREE.TetrahedronGeometry(radius));
}

{
  const radius = 2;
  addLineGeometry(0.2, 13.9, new THREE.TetrahedronGeometry(radius));
}

{
  const radius = 2;
  addLineGeometry(0.4, 12.9, new THREE.TetrahedronGeometry(radius));
}

//SLIDE 12
{
  const radius = 3;
  addSolidGeometry(-1, 15.0, new THREE.DodecahedronGeometry(radius));
}

{
  const radius = 1;
  addSolidGeometry(-0.9, 14.6, new THREE.DodecahedronGeometry(radius));
}
{
  const radius = 3;
  addSolidGeometry(1, 14.4, new THREE.DodecahedronGeometry(radius));
}

//SLIDE 13
{
  const radius = 3;
  addSolidGeometry(-1, 16.0, new THREE.IcosahedronGeometry(radius));
}

{
  const radius = 4;
  addSolidGeometry(1, 16.3, new THREE.IcosahedronGeometry(radius));
}

//SLIDE 14
{
  const length = 4;
  addSolidGeometry(-1, 17.3, new THREE.BoxGeometry(length, length, length));
}

{
  const length = 3;
  addSolidGeometry(1, 17.6, new THREE.BoxGeometry(length, length, length));
}

{
  const length = 2;
  addSolidGeometry(0.9, 17.0, new THREE.BoxGeometry(length, length, length));
}

//SLIDE 15
{
  const length = 3;
  addSolidGeometry(1, 18.6, new THREE.OctahedronGeometry(length));
}

{
  const length = 3
  addSolidGeometry(-1, 18.9, new THREE.OctahedronGeometry(length));
}

{
  const length = 2;
  addSolidGeometry(-0.4, 18.2, new THREE.OctahedronGeometry(length));
}

{
  const length = 2;
  addSolidGeometry(0.6, 19.1, new THREE.OctahedronGeometry(length));
}

//SLIDE 16
{
  const shape = generateHeartShape();
  const extrudeSettings = generateExtrudeSettings();

  addSolidGeometry(0.7, 20.4, new THREE.ExtrudeGeometry(shape, extrudeSettings));
}

{
  const shape = generateHeartShape();
  const extrudeSettings = generateExtrudeSettings();

  addSolidGeometry(-0.6, 19.7, new THREE.ExtrudeGeometry(shape, extrudeSettings));
}

{
  const shape = generateHeartShape();
  const extrudeSettings = generateExtrudeSettings();

  addSolidGeometry(0.4, 19.7, new THREE.ExtrudeGeometry(shape, extrudeSettings));
}

requestAnimationFrame( render );

window.addEventListener('wheel', changeCameraPosition);

function generateHeartShape() {
  const shape = new THREE.Shape();
  const x = -1.25;
  const y = -2.5;
  shape.moveTo(x + 1.25, y + 1.25);
  shape.bezierCurveTo(x + 1.25, y + 1.25, x + 1, y, x, y);
  shape.bezierCurveTo(x - 1.5, y, x - 1.5, y + 1.75, x - 1.5, y + 1.75);
  shape.bezierCurveTo(x - 1.5, y + 2.75, x - 0.75, y + 3.85, x + 1.25, y + 4.75);
  shape.bezierCurveTo(x + 3, y + 3.85, x + 4, y + 2.25, x + 4, y + 1.75);
  shape.bezierCurveTo(x + 4, y + 1.75, x + 4, y, x + 2.5, y);
  shape.bezierCurveTo(x + 1.75, y, x + 1.25, y + 1.25, x + 1.25, y + 1.25);

  return shape;
}

function generateExtrudeSettings() {
  return {
    steps: 2,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
  };
}

const string = `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #efefef;
}
.bear {
  height: 100%;
}
.skin,
.skin .face,
.skin .ear,
.skin .brow,
.skin .eye,
.skin .mouth,
.skin .mouth:before,
.skin .mouth:after,
.skin .cheek,
.skin .pocket,
.skin .size,
.skin .point,
.skin .body {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
.skin {
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}
.skin {
  width: 300px;
  height: 420px;
  font-size: 100px;
  z-index: 1;
}
.skin .head {
  position: relative;
  z-index: 2;
}
.skin .face {
  background: #000;
  height: 1.2em;
  width: 1.52em;
  top: 0;
  border-radius: 50% 50% 0 0/ 60% 60% 0 0;
  margin-top: 0.2em;
}
.skin .ear {
  width: 2em;
  margin-top: 0.2em;
}
.skin .ear::before,
.skin .ear::after {
  content: "";
  position: absolute;
  width: 0.28em;
  height: 0.28em;
  background: pink;
  box-shadow: 0 0 0 0.05em #000 inset;
  border-radius: 50%;
}
.skin .ear::before {
  margin-left: 0.27em;
  left: 0;
}
.skin .ear::after {
  margin-right: 0.27em;
  right: 0;
}
.skin .brow {
  width: 1em;
  margin-top: 0.32em;
}
.skin .brow::before,
.skin .brow::after {
  content: "";
  position: absolute;
  width: 0.15em;
  height: 0.15em;
  border-top: 0.03em solid #fff;
  border-radius: 0.15em 0.15em 0 0;
}
.bear .brow::before {
  margin-left: 0.1em;
  left: 0;
}
.bear .brow::after {
  margin-right: 0.1em;
  right: 0;
}
.skin .eye {
  width: 0.26em;
  height: 0.26em;
  margin-top: 0.46em;
  box-shadow: -0.33em 0 0 #fff, 0.33em 0 0 #fff;
  border-radius: 50%;
}
.skin .eye::before,
.skin .eye::after{
    content: "";
    position: absolute;
width: 0.05em;
height: 0.1em;
border-radius: 50%;
background: #000;
top: 0.09em;
}
.bear .eye::before{
    left: -0.20em;
}
.bear .eye::after{
    right: -0.20em;
}
.skin .mouth{
    width: 0.7em;
    margin-top: 0.67em;
    height: 0.57em;
    background-color: #fff;
    border-radius: 70%;
}
.skin .mouth:before {
  content: "";
  margin-top: 0.01em;
  width: 0.2em;
  height: 0.2em;
  background: #000;
  border-radius: 40% 100% 40% 70%;
  transform: rotate(-45deg);
}
.skin .mouth:after {
  content: "";
  margin-top: 0.26em;
  width: 0.6em;
  height: 0.16em;
  background: #000;
  border-radius: 50%;
}
.skin .cheek {
  width: 0.35em;
  height: 0.35em;
  margin-top: 0.71em;
  box-shadow: -0.64em 0 0 #fc2e30, 0.64em 0 0 #fc2e30;
  border-radius: 50%;
}
.skin .body {
     position: absolute;
  z-index: 2;
  width: 2em;
  height: 2.2em;
  background: #000;
  margin-top: 1.3em;
  border-radius: 50% 50% 30% 30%;
}
.skin .pocket{
    border: 3px solid #1985EB;
    content: "";
width: 70px;
height: 60px;
background: rgb(9, 129, 228);
margin-top: 1em;
border-radius: 0 0 50% 50%/ 0 0 50% 50%;
}
.skin .size{
    height: auto;
    font-size: 3px;
    color: yellow;
    text-align: center;
    display: none;
}
.pocket:hover .size{
    display: block;
}
.skin .point{
    background: yellowgreen;
    width: 18px;
    height: 18px;
    text-align: center;
    bottom: 3px;
    display: block;
}
.point::before, .point::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background: yellowgreen;
}
.point::before{
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);

}
.point::after{
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
}
.pocket:hover .point{
    display: none;
}
.skin .arm {
  position: relative;
  margin-top: -0.2em;
}
.skin .arm:before,
.skin .arm:after {
  content: "";
  position: absolute;
  width: 0.5em;
  height: 2em;
  border-radius: 40% 0 50% 50%/50% 0 30% 30%;
  background: #000;
}
.skin .arm:before {
  transform: rotate(16deg);
  left: -0.04em;
}
.skin .arm:after {
  transform: rotateZ(-16deg) rotateY(180deg);
  right: -0.04em;
}
.skin .leg {
  position: absolute;
  width: 100%;
  margin-top: 1.9em;
}
.skin .leg:before,
.skin .leg:after {
  content: "";
  position: absolute;
  width: 0.45em;
  height: 1em;
  background: #000;
  border-radius: 30% 50% 40% 40%/ 50% 50% 40% 40%;
}
.skin .leg:before {
  left: 0.05em;
  transform: rotate(-5deg);
}
.skin .leg:after {
  right: 0.05em;
  transform: rotateZ(5deg) rotateY(180deg);
}
.skin .foot {
  position: absolute;
  margin-top: 0.65em;
  width: 100%;
}
.skin .foot:before,
.skin .foot:after {
  content: "";
  position: absolute;
  width: 0.3em;
  height: 0.35em;
  border-radius: 49% 20%;
  background: #000;
}
.skin .foot:before {
  left: 0.1em;
  transform: rotate(3deg);
}
.skin .foot:after {
  right: 0.1em;
  transform: rotateZ(-3deg) rotateY(180deg);
}
.skin .leg-fix {
  position: absolute;
  width: 100%;
}
.skin .leg-fix:before,
.skin .leg-fix:after {
  content: "";
  position: absolute;
  background: -webkit-radial-gradient(
    100% 100%,
    farthest-side,
    transparent 80%,
    #000 80%
  );
  width: 0.2em;
  height: 0.2em;
  margin-top: 0.46em;
}
.skin .leg-fix:before {
  left: 0.47em;
}
.skin .leg-fix:after {
  right: 0.47em;
  transform: rotateY(180deg);
}
.skin .brow {
  animation: brow 8s linear infinite;
}
@keyframes brow {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(0, 0);
  }
  12% {
    transform: translate(0, -0.05em);
  }
  14% {
    transform: translate(0, 0);
  }
  16% {
    transform: translate(0, -0.05em);
  }
  18% {
    transform: translate(0, 0);
  }
  42% {
    transform: translate(0, 0);
  }
  44% {
    transform: translate(0, -0.05em);
  }
  46% {
    transform: translate(0, 0);
  }
  48% {
    transform: translate(0, -0.05em);
  }
  50% {
    transform: translate(0, 0);
  }
  70% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.skin .mouth:after {
  animation: mouth 6s linear infinite;
}
@keyframes mouth {
  0% {
    width: 0.5em;
  }
  10% {
    width: 0.2em;
  }
  60% {
    width: 0.2em;
  }
  70% {
    width: 0.5em;
  }
  100% {
    width: 0.5em;
  }
}
`;
export default string;

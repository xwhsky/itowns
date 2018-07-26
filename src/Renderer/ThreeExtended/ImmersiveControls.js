import FirstPersonControls from './FirstPersonControls';
import AnimationPlayer, { AnimatedExpression } from '../../Core/AnimationPlayer';

function getPanoPosition(layer, pano) {
    return { position: pano.vertices[0].xyz() };
}

function getNextPano(layer) {
    if (!layer.currentPano) return {};
    var index = (layer.currentPano.index + 1) % layer.poses.length;
    return getPanoPosition(layer, layer.poses[index]);
}

function getCurrentPano(layer) {
    if (!layer.currentPano) return {};
    return getPanoPosition(layer, layer.currentPano);
}

// Expression used to damp camera's moves
function moveCameraExp(root, progress) {
    const dampingProgress = 1 - Math.pow((1 - (Math.sin((progress - 0.5) * Math.PI) * 0.5 + 0.5)), 2);
    root.camera.position.lerpVectors(root.positionFrom, root.positionTo, dampingProgress);
}

class ImmersiveControlsLight extends FirstPersonControls {
    constructor(view, options = {}) {
        super(view, options);

        // store layers
        this.layers = [];
        this.currentLayerIndex = 0;

        // manage camera movements
        this.player = new AnimationPlayer();
        this.animationMoveCamera = new AnimatedExpression({ duration: options.animationDuration || 50, root: this, expression: moveCameraExp, name: 'Move camera' });

        this.player.addEventListener('animation-frame', this.updateView.bind(this));
    }

    addLayer(layer) {
        this.layers.push(layer);
        this.currentLayer = layer;
        this.currentLayerIndex = this.layers.length - 1;
    }

    setCameraToCurrentPano() {
        const nextPanoPosition = getNextPano(this.currentLayer).position;
        const currentPanoPosition = getCurrentPano(this.currentLayer).position;
        this.setCameraOnPano(currentPanoPosition, nextPanoPosition);
    }

    setCameraOnPano(positionPano, nextPanoPosition) {
        if (!positionPano) {
            return;
        }
        this.camera.position.copy(positionPano);
        this.camera.up.copy(positionPano.clone().multiplyScalar(1.1).normalize());
        this.camera.lookAt(nextPanoPosition.clone());
        this.camera.updateMatrixWorld();
        this.reset();
    }

    moveCameraTo(positionTo) {
        this.positionFrom = this.camera.position.clone();
        this.positionTo = positionTo;
        this.player.play(this.animationMoveCamera);
    }

    onKeyDown(e) {
        super.onKeyDown(e);
        if (e.keyCode == 90) {
            this.moveCameraTo(getNextPano(this.currentLayer).position);
        }
    }

    updateView() {
        this.view.notifyChange(this.camera);
    }
}

export default ImmersiveControlsLight;

// add styles
import './style.css'
// three.js
import * as THREE from 'three'

class Main {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer()


    init = () => {
        // set size
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
        let axis = new THREE.AxesHelper(10)
        this.scene.add(axis)

        let light = new THREE.DirectionalLight(0xffffff, 1.0)
        light.position.set(100, 100, 100)
        this.scene.add(light)
        let light2 = new THREE.DirectionalLight(0xffffff, 1.0)
        light2.position.set(-100, 100, -100)
        this.scene.add(light2)

        let material = new THREE.MeshBasicMaterial({
            color: 0xaaaaaa,
            wireframe: true
        })

        this.box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
        this.scene.add(this.box)

        this.box.position.x = 0.5
        this.box.rotation.y = 0.5

        this.camera.position.x = 5
        this.camera.position.y = 5
        this.camera.position.z = 5

        this.camera.lookAt(this.scene.position)

        this.animate()
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.render()
    }

    render = () => {
        let timer = 0.002 * Date.now()
        this.box.position.y = 0.5 + 0.5 * Math.sin(timer)
        this.box.rotation.x += 0.1
        this.renderer.render(this.scene, this.camera)
    }
}

let main = new Main()
main.init()

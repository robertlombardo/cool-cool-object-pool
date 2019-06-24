## Cool Cool Object Pool
_the teeny-tiny, zero-dependency object pool module_

#### installation:
`npm install cool-cool-object-pool --save`

#### example usage:
```javascript
const ObjectPool = require(`cool-cool-object-pool`)

const particle_pool = ObjectPool({
    create: particle_skin => {
        const particle = new Particle(particle_skin) // some canvas obj or physics obj
        initParticle(particle)
        return particle
    },

    reset: initParticle,

    starting_num: 100,
})

const initParticle = particle => {
    // maybe set world model values like x & y coords
    // maybe kick off some tweens & set particle_pool.putObj as the completion callback
}
```

pc.script.create('move', function (app) {
    // Creates a new Move instance
    var Move = function (entity) {
        this.entity = entity;
    };

    Move.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.translate(this.movement.clone().scale(dt));
            this.entity.rigidbody.syncEntityToBody();
        }
    };

    return Move;
});
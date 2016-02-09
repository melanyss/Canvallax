canvallax.Circle = createElement(
  /** @lends canvallax.Circle.prototype */
  {
    /**
     * Object type
     * @type {string}
     * @default
     */
    type: 'circle',

    radius: 20,
    // (Number)
    // Radius of the circle.

    draw: function(ctx,coords) {
      ctx.arc(coords[0] + this.radius, coords[1] + this.radius, this.radius, 0, twoPI);
    }

  });

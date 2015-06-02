describe('Bowling game', function(){

  it ('can knock down pins', function(){

    var bowl = new Game();

    expect(bowl.hitPins(5)).toEqual(5);

  })
})
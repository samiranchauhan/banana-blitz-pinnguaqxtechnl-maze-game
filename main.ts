scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(100)
    sprites.destroy(otherSprite, effects.trail, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setPosition(24, 24)
    game.splash("Try Again!")
    tiles.placeOnRandomTile(otherSprite, sprites.dungeon.floorLight5)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let snake: Sprite = null
let banana: Sprite = null
let mySprite: Sprite = null
game.splash("\"Welcome! Collect the bananas and avoid the snakes while finding the treasure chest.\"")
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f f f . . . . 
    . . f d d d e e e e d d f . . . 
    . c d d d d d e e e b d c . . . 
    . c d d d d d d e e b d c . . . 
    c d d f d d f d e e f c . f f . 
    c d d f d d f d e e f . . f e f 
    c d e e d d d d e e f . . f e f 
    . f d d d c d e e f f . . f e f 
    . . f f f d e e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . . . f f e e e e e b f f . . 
    . . . f e f f e e c d d f f . . 
    . . f d d b d d c f f f . . . . 
    . . f d d c d d d f f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(24, 24)
info.startCountdown(60)
for (let index = 0; index < randint(4, 6); index++) {
    banana = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 5 5 5 . . . . . . . 
        . . . . . 7 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(banana, sprites.dungeon.floorLight2)
}
info.setScore(0)
forever(function () {
    snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    snake.follow(mySprite, 30)
    tiles.placeOnRandomTile(snake, sprites.dungeon.floorLight5)
    pause(4000)
})

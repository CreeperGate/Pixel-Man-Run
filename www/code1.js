gdjs.TutorialCode = {};
gdjs.TutorialCode.GDPlayerObjects1= [];
gdjs.TutorialCode.GDPlayerObjects2= [];
gdjs.TutorialCode.GDFloorObjects1= [];
gdjs.TutorialCode.GDFloorObjects2= [];
gdjs.TutorialCode.GDDeathAreaObjects1= [];
gdjs.TutorialCode.GDDeathAreaObjects2= [];
gdjs.TutorialCode.GDLeftObjects1= [];
gdjs.TutorialCode.GDLeftObjects2= [];
gdjs.TutorialCode.GDRightObjects1= [];
gdjs.TutorialCode.GDRightObjects2= [];
gdjs.TutorialCode.GDJumpObjects1= [];
gdjs.TutorialCode.GDJumpObjects2= [];
gdjs.TutorialCode.GDCrouchObjects1= [];
gdjs.TutorialCode.GDCrouchObjects2= [];
gdjs.TutorialCode.GDWallBlockObjects1= [];
gdjs.TutorialCode.GDWallBlockObjects2= [];
gdjs.TutorialCode.GDWallBlockNoClutchObjects1= [];
gdjs.TutorialCode.GDWallBlockNoClutchObjects2= [];
gdjs.TutorialCode.GDWelcomeObjects1= [];
gdjs.TutorialCode.GDWelcomeObjects2= [];
gdjs.TutorialCode.GDGoodObjects1= [];
gdjs.TutorialCode.GDGoodObjects2= [];
gdjs.TutorialCode.GDWallObjects1= [];
gdjs.TutorialCode.GDWallObjects2= [];
gdjs.TutorialCode.GDLedgesObjects1= [];
gdjs.TutorialCode.GDLedgesObjects2= [];
gdjs.TutorialCode.GDFlagObjects1= [];
gdjs.TutorialCode.GDFlagObjects2= [];
gdjs.TutorialCode.GDFinishObjects1= [];
gdjs.TutorialCode.GDFinishObjects2= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TutorialCode.GDPlayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDDeathAreaObjects1Objects = Hashtable.newFrom({"DeathArea": gdjs.TutorialCode.GDDeathAreaObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TutorialCode.GDPlayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.TutorialCode.GDFlagObjects1});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.TutorialCode.GDRightObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDRightObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDRightObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDRightObjects1[k] = gdjs.TutorialCode.GDRightObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDRightObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.TutorialCode.GDRightObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDRightObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDRightObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDRightObjects1[k] = gdjs.TutorialCode.GDRightObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDRightObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.TutorialCode.GDLeftObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDLeftObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDLeftObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDLeftObjects1[k] = gdjs.TutorialCode.GDLeftObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDLeftObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.TutorialCode.GDLeftObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDLeftObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDLeftObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDLeftObjects1[k] = gdjs.TutorialCode.GDLeftObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDLeftObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.TutorialCode.GDJumpObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDJumpObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDJumpObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDJumpObjects1[k] = gdjs.TutorialCode.GDJumpObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDJumpObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.TutorialCode.GDJumpObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDJumpObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDJumpObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDJumpObjects1[k] = gdjs.TutorialCode.GDJumpObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDJumpObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.TutorialCode.GDCrouchObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDCrouchObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDCrouchObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDCrouchObjects1[k] = gdjs.TutorialCode.GDCrouchObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDCrouchObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.TutorialCode.GDCrouchObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDCrouchObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDCrouchObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDCrouchObjects1[k] = gdjs.TutorialCode.GDCrouchObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDCrouchObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeathArea"), gdjs.TutorialCode.GDDeathAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDDeathAreaObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects1[k] = gdjs.TutorialCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over Screen Tutorial", false);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.TutorialCode.GDCrouchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.TutorialCode.GDJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.TutorialCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.TutorialCode.GDRightObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDLeftObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDRightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDJumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDJumpObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDCrouchObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDCrouchObjects1[i].hide(false);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.TutorialCode.GDCrouchObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeathArea"), gdjs.TutorialCode.GDDeathAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.TutorialCode.GDJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.TutorialCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.TutorialCode.GDRightObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDJumpObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDJumpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDCrouchObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDCrouchObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDDeathAreaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDDeathAreaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.TutorialCode.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish Tutorial", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDPlayerObjects1.length = 0;
gdjs.TutorialCode.GDPlayerObjects2.length = 0;
gdjs.TutorialCode.GDFloorObjects1.length = 0;
gdjs.TutorialCode.GDFloorObjects2.length = 0;
gdjs.TutorialCode.GDDeathAreaObjects1.length = 0;
gdjs.TutorialCode.GDDeathAreaObjects2.length = 0;
gdjs.TutorialCode.GDLeftObjects1.length = 0;
gdjs.TutorialCode.GDLeftObjects2.length = 0;
gdjs.TutorialCode.GDRightObjects1.length = 0;
gdjs.TutorialCode.GDRightObjects2.length = 0;
gdjs.TutorialCode.GDJumpObjects1.length = 0;
gdjs.TutorialCode.GDJumpObjects2.length = 0;
gdjs.TutorialCode.GDCrouchObjects1.length = 0;
gdjs.TutorialCode.GDCrouchObjects2.length = 0;
gdjs.TutorialCode.GDWallBlockObjects1.length = 0;
gdjs.TutorialCode.GDWallBlockObjects2.length = 0;
gdjs.TutorialCode.GDWallBlockNoClutchObjects1.length = 0;
gdjs.TutorialCode.GDWallBlockNoClutchObjects2.length = 0;
gdjs.TutorialCode.GDWelcomeObjects1.length = 0;
gdjs.TutorialCode.GDWelcomeObjects2.length = 0;
gdjs.TutorialCode.GDGoodObjects1.length = 0;
gdjs.TutorialCode.GDGoodObjects2.length = 0;
gdjs.TutorialCode.GDWallObjects1.length = 0;
gdjs.TutorialCode.GDWallObjects2.length = 0;
gdjs.TutorialCode.GDLedgesObjects1.length = 0;
gdjs.TutorialCode.GDLedgesObjects2.length = 0;
gdjs.TutorialCode.GDFlagObjects1.length = 0;
gdjs.TutorialCode.GDFlagObjects2.length = 0;
gdjs.TutorialCode.GDFinishObjects1.length = 0;
gdjs.TutorialCode.GDFinishObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;

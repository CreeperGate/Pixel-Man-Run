gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDDeathAreaObjects1= [];
gdjs.Level_321Code.GDDeathAreaObjects2= [];
gdjs.Level_321Code.GDLeftObjects1= [];
gdjs.Level_321Code.GDLeftObjects2= [];
gdjs.Level_321Code.GDRightObjects1= [];
gdjs.Level_321Code.GDRightObjects2= [];
gdjs.Level_321Code.GDJumpObjects1= [];
gdjs.Level_321Code.GDJumpObjects2= [];
gdjs.Level_321Code.GDCrouchObjects1= [];
gdjs.Level_321Code.GDCrouchObjects2= [];
gdjs.Level_321Code.GDWallBlockObjects1= [];
gdjs.Level_321Code.GDWallBlockObjects2= [];
gdjs.Level_321Code.GDWallBlockNoClutchObjects1= [];
gdjs.Level_321Code.GDWallBlockNoClutchObjects2= [];
gdjs.Level_321Code.GDFlagObjects1= [];
gdjs.Level_321Code.GDFlagObjects2= [];
gdjs.Level_321Code.GDBlockerObjects1= [];
gdjs.Level_321Code.GDBlockerObjects2= [];
gdjs.Level_321Code.GDTryToBeatObjects1= [];
gdjs.Level_321Code.GDTryToBeatObjects2= [];
gdjs.Level_321Code.GDPurpleObjects1= [];
gdjs.Level_321Code.GDPurpleObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDeathAreaObjects1Objects = Hashtable.newFrom({"DeathArea": gdjs.Level_321Code.GDDeathAreaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.Level_321Code.GDFlagObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDRightObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRightObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDRightObjects1[k] = gdjs.Level_321Code.GDRightObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRightObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDRightObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRightObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDRightObjects1[k] = gdjs.Level_321Code.GDRightObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRightObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLeftObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLeftObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLeftObjects1[k] = gdjs.Level_321Code.GDLeftObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLeftObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLeftObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLeftObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLeftObjects1[k] = gdjs.Level_321Code.GDLeftObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLeftObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.Level_321Code.GDJumpObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJumpObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJumpObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJumpObjects1[k] = gdjs.Level_321Code.GDJumpObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJumpObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.Level_321Code.GDJumpObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJumpObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJumpObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJumpObjects1[k] = gdjs.Level_321Code.GDJumpObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJumpObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.Level_321Code.GDCrouchObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDCrouchObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCrouchObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDCrouchObjects1[k] = gdjs.Level_321Code.GDCrouchObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCrouchObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.Level_321Code.GDCrouchObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDCrouchObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDCrouchObjects1[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDCrouchObjects1[k] = gdjs.Level_321Code.GDCrouchObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDCrouchObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeathArea"), gdjs.Level_321Code.GDDeathAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDeathAreaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over Screen Level 1", false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.Level_321Code.GDCrouchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.Level_321Code.GDJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDJumpObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJumpObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDCrouchObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCrouchObjects1[i].hide(false);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Crouch"), gdjs.Level_321Code.GDCrouchObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeathArea"), gdjs.Level_321Code.GDDeathAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.Level_321Code.GDJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDJumpObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJumpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDCrouchObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCrouchObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDeathAreaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeathAreaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_321Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFlagObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish Level 1", false);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDDeathAreaObjects1.length = 0;
gdjs.Level_321Code.GDDeathAreaObjects2.length = 0;
gdjs.Level_321Code.GDLeftObjects1.length = 0;
gdjs.Level_321Code.GDLeftObjects2.length = 0;
gdjs.Level_321Code.GDRightObjects1.length = 0;
gdjs.Level_321Code.GDRightObjects2.length = 0;
gdjs.Level_321Code.GDJumpObjects1.length = 0;
gdjs.Level_321Code.GDJumpObjects2.length = 0;
gdjs.Level_321Code.GDCrouchObjects1.length = 0;
gdjs.Level_321Code.GDCrouchObjects2.length = 0;
gdjs.Level_321Code.GDWallBlockObjects1.length = 0;
gdjs.Level_321Code.GDWallBlockObjects2.length = 0;
gdjs.Level_321Code.GDWallBlockNoClutchObjects1.length = 0;
gdjs.Level_321Code.GDWallBlockNoClutchObjects2.length = 0;
gdjs.Level_321Code.GDFlagObjects1.length = 0;
gdjs.Level_321Code.GDFlagObjects2.length = 0;
gdjs.Level_321Code.GDBlockerObjects1.length = 0;
gdjs.Level_321Code.GDBlockerObjects2.length = 0;
gdjs.Level_321Code.GDTryToBeatObjects1.length = 0;
gdjs.Level_321Code.GDTryToBeatObjects2.length = 0;
gdjs.Level_321Code.GDPurpleObjects1.length = 0;
gdjs.Level_321Code.GDPurpleObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;

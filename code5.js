gdjs.Game_32Over_32Screen_32Level_321Code = {};
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverObjects1= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverObjects2= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverSubObjects1= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverSubObjects2= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects2= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects2= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects1= [];
gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects2= [];

gdjs.Game_32Over_32Screen_32Level_321Code.conditionTrue_0 = {val:false};
gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Game_32Over_32Screen_32Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Game_32Over_32Screen_32Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ReTry"), gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1);

gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1[k] = gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1[i];
        ++k;
    }
}
gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1.length = k;}if (gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1);

gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1[k] = gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1.length = k;}if (gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32Over_32Screen_32Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects1);
{for(var i = 0, len = gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects1[i].hide();
}
}}

}


};

gdjs.Game_32Over_32Screen_32Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverObjects1.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverObjects2.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverSubObjects1.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDGameOverSubObjects2.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects1.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDMainMenuObjects2.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects1.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDReTryObjects2.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects1.length = 0;
gdjs.Game_32Over_32Screen_32Level_321Code.GDCenterObjects2.length = 0;

gdjs.Game_32Over_32Screen_32Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Game_32Over_32Screen_32Level_321Code'] = gdjs.Game_32Over_32Screen_32Level_321Code;

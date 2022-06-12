gdjs.Game_32Over_32Screen_32TutorialCode = {};
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverObjects1= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverObjects2= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverSubObjects1= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverSubObjects2= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects2= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects2= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects1= [];
gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects2= [];

gdjs.Game_32Over_32Screen_32TutorialCode.conditionTrue_0 = {val:false};
gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32Over_32Screen_32TutorialCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32Over_32Screen_32TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ReTry"), gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1);

gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = true;
        gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1[k] = gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1[i];
        ++k;
    }
}
gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1.length = k;}if (gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1);

gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = true;
        gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1[k] = gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1.length = k;}if (gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32Over_32Screen_32TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects1);
{for(var i = 0, len = gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects1[i].hide();
}
}}

}


};

gdjs.Game_32Over_32Screen_32TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverObjects1.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverObjects2.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverSubObjects1.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDGameOverSubObjects2.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects1.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDMainMenuObjects2.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects1.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDReTryObjects2.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects1.length = 0;
gdjs.Game_32Over_32Screen_32TutorialCode.GDCenterObjects2.length = 0;

gdjs.Game_32Over_32Screen_32TutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32Over_32Screen_32TutorialCode'] = gdjs.Game_32Over_32Screen_32TutorialCode;

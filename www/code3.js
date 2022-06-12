gdjs.Finish_32Level_321Code = {};
gdjs.Finish_32Level_321Code.GDCompleteObjects1= [];
gdjs.Finish_32Level_321Code.GDCompleteObjects2= [];
gdjs.Finish_32Level_321Code.GDGoodJobSubObjects1= [];
gdjs.Finish_32Level_321Code.GDGoodJobSubObjects2= [];
gdjs.Finish_32Level_321Code.GDMainMenuObjects1= [];
gdjs.Finish_32Level_321Code.GDMainMenuObjects2= [];
gdjs.Finish_32Level_321Code.GDPlayAgainObjects1= [];
gdjs.Finish_32Level_321Code.GDPlayAgainObjects2= [];
gdjs.Finish_32Level_321Code.GDCenterObjects1= [];
gdjs.Finish_32Level_321Code.GDCenterObjects2= [];

gdjs.Finish_32Level_321Code.conditionTrue_0 = {val:false};
gdjs.Finish_32Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Finish_32Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Finish_32Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Finish_32Level_321Code.GDPlayAgainObjects1);

gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Finish_32Level_321Code.GDPlayAgainObjects1.length;i<l;++i) {
    if ( gdjs.Finish_32Level_321Code.GDPlayAgainObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Finish_32Level_321Code.GDPlayAgainObjects1[k] = gdjs.Finish_32Level_321Code.GDPlayAgainObjects1[i];
        ++k;
    }
}
gdjs.Finish_32Level_321Code.GDPlayAgainObjects1.length = k;}if (gdjs.Finish_32Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.Finish_32Level_321Code.GDMainMenuObjects1);

gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Finish_32Level_321Code.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.Finish_32Level_321Code.GDMainMenuObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Finish_32Level_321Code.GDMainMenuObjects1[k] = gdjs.Finish_32Level_321Code.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.Finish_32Level_321Code.GDMainMenuObjects1.length = k;}if (gdjs.Finish_32Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Finish_32Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Finish_32Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Finish_32Level_321Code.GDCenterObjects1);
{for(var i = 0, len = gdjs.Finish_32Level_321Code.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Finish_32Level_321Code.GDCenterObjects1[i].hide();
}
}}

}


};

gdjs.Finish_32Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Finish_32Level_321Code.GDCompleteObjects1.length = 0;
gdjs.Finish_32Level_321Code.GDCompleteObjects2.length = 0;
gdjs.Finish_32Level_321Code.GDGoodJobSubObjects1.length = 0;
gdjs.Finish_32Level_321Code.GDGoodJobSubObjects2.length = 0;
gdjs.Finish_32Level_321Code.GDMainMenuObjects1.length = 0;
gdjs.Finish_32Level_321Code.GDMainMenuObjects2.length = 0;
gdjs.Finish_32Level_321Code.GDPlayAgainObjects1.length = 0;
gdjs.Finish_32Level_321Code.GDPlayAgainObjects2.length = 0;
gdjs.Finish_32Level_321Code.GDCenterObjects1.length = 0;
gdjs.Finish_32Level_321Code.GDCenterObjects2.length = 0;

gdjs.Finish_32Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Finish_32Level_321Code'] = gdjs.Finish_32Level_321Code;

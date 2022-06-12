gdjs.Finish_32TutorialCode = {};
gdjs.Finish_32TutorialCode.GDCompleteObjects1= [];
gdjs.Finish_32TutorialCode.GDCompleteObjects2= [];
gdjs.Finish_32TutorialCode.GDGoodJobSubObjects1= [];
gdjs.Finish_32TutorialCode.GDGoodJobSubObjects2= [];
gdjs.Finish_32TutorialCode.GDMainMenuObjects1= [];
gdjs.Finish_32TutorialCode.GDMainMenuObjects2= [];
gdjs.Finish_32TutorialCode.GDPlayAgainObjects1= [];
gdjs.Finish_32TutorialCode.GDPlayAgainObjects2= [];
gdjs.Finish_32TutorialCode.GDCenterObjects1= [];
gdjs.Finish_32TutorialCode.GDCenterObjects2= [];

gdjs.Finish_32TutorialCode.conditionTrue_0 = {val:false};
gdjs.Finish_32TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.Finish_32TutorialCode.condition1IsTrue_0 = {val:false};


gdjs.Finish_32TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Finish_32TutorialCode.GDPlayAgainObjects1);

gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Finish_32TutorialCode.GDPlayAgainObjects1.length;i<l;++i) {
    if ( gdjs.Finish_32TutorialCode.GDPlayAgainObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = true;
        gdjs.Finish_32TutorialCode.GDPlayAgainObjects1[k] = gdjs.Finish_32TutorialCode.GDPlayAgainObjects1[i];
        ++k;
    }
}
gdjs.Finish_32TutorialCode.GDPlayAgainObjects1.length = k;}if (gdjs.Finish_32TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.Finish_32TutorialCode.GDMainMenuObjects1);

gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Finish_32TutorialCode.GDMainMenuObjects1.length;i<l;++i) {
    if ( gdjs.Finish_32TutorialCode.GDMainMenuObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = true;
        gdjs.Finish_32TutorialCode.GDMainMenuObjects1[k] = gdjs.Finish_32TutorialCode.GDMainMenuObjects1[i];
        ++k;
    }
}
gdjs.Finish_32TutorialCode.GDMainMenuObjects1.length = k;}if (gdjs.Finish_32TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.Finish_32TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Finish_32TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Finish_32TutorialCode.GDCenterObjects1);
{for(var i = 0, len = gdjs.Finish_32TutorialCode.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Finish_32TutorialCode.GDCenterObjects1[i].hide();
}
}}

}


};

gdjs.Finish_32TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Finish_32TutorialCode.GDCompleteObjects1.length = 0;
gdjs.Finish_32TutorialCode.GDCompleteObjects2.length = 0;
gdjs.Finish_32TutorialCode.GDGoodJobSubObjects1.length = 0;
gdjs.Finish_32TutorialCode.GDGoodJobSubObjects2.length = 0;
gdjs.Finish_32TutorialCode.GDMainMenuObjects1.length = 0;
gdjs.Finish_32TutorialCode.GDMainMenuObjects2.length = 0;
gdjs.Finish_32TutorialCode.GDPlayAgainObjects1.length = 0;
gdjs.Finish_32TutorialCode.GDPlayAgainObjects2.length = 0;
gdjs.Finish_32TutorialCode.GDCenterObjects1.length = 0;
gdjs.Finish_32TutorialCode.GDCenterObjects2.length = 0;

gdjs.Finish_32TutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['Finish_32TutorialCode'] = gdjs.Finish_32TutorialCode;

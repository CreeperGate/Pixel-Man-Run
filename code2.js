gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDWelcomeObjects1= [];
gdjs.Main_32MenuCode.GDWelcomeObjects2= [];
gdjs.Main_32MenuCode.GDChooseALevelObjects1= [];
gdjs.Main_32MenuCode.GDChooseALevelObjects2= [];
gdjs.Main_32MenuCode.GDTutorialObjects1= [];
gdjs.Main_32MenuCode.GDTutorialObjects2= [];
gdjs.Main_32MenuCode.GDCenterObjects1= [];
gdjs.Main_32MenuCode.GDCenterObjects2= [];
gdjs.Main_32MenuCode.GDLevel1Objects1= [];
gdjs.Main_32MenuCode.GDLevel1Objects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Main_32MenuCode.GDTutorialObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDTutorialObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDTutorialObjects1[k] = gdjs.Main_32MenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDTutorialObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.Main_32MenuCode.GDLevel1Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLevel1Objects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDLevel1Objects1[k] = gdjs.Main_32MenuCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLevel1Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Main_32MenuCode.GDCenterObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCenterObjects1[i].hide();
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDWelcomeObjects1.length = 0;
gdjs.Main_32MenuCode.GDWelcomeObjects2.length = 0;
gdjs.Main_32MenuCode.GDChooseALevelObjects1.length = 0;
gdjs.Main_32MenuCode.GDChooseALevelObjects2.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects1.length = 0;
gdjs.Main_32MenuCode.GDTutorialObjects2.length = 0;
gdjs.Main_32MenuCode.GDCenterObjects1.length = 0;
gdjs.Main_32MenuCode.GDCenterObjects2.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDLevel1Objects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;

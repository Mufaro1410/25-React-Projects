const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColourGenerator: true,
  showAccordion: true,
  showTreeView: true,
};

function FeatureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occured! Please try again");
  });
}

export default FeatureFlagsDataServiceCall;

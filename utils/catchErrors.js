function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // request made and the server responsed with a status code that is not in the range of 2's
    errorMsg = error.response.data;
    console.error('Error response', errorMsg);

    //  cloudinary image upload errors
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //  request made, but no response was received
    errorMsg = error.request;
    console.error('Error request', errorMsg);
  } else {
    // something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error('Error message', errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;

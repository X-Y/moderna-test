export const getInsurances = _state => {
  const state = _state.api;
  const baseUrl = state.meta && state.meta.root;
  if(!baseUrl) {
    return [];
  }

  return state.insurances.map(({name, image, url}) => {
    if(!(name && image && image.href && url)){
      return null;
    }
    return {
      name,
      image: {
        href: baseUrl + image.href
      },
      url: baseUrl + url
    }
  });
}

export const getLogoHref = _state => {
  const state = _state.api;
  const baseUrl = state.meta && state.meta.root;
  if(!baseUrl) {
    return '';
  }

  const relHref = state.embedded && state.embedded.logo && state.embedded.logo.href;
  return relHref ? baseUrl + relHref : '';
}

export const getFailedStatus = _state => {
  const state = _state.api;
  const failedStatus = state.fetchFailed;

  return failedStatus;
}
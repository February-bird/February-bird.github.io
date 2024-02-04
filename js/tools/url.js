function getSearchParams(url, key) {
  return new URL(url).searchParams.get(key);
}

export { getSearchParams };

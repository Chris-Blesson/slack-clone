(function () {
  'use strict';

  const VERSION = '1646106835820|0.5929413566507491';
  self.CACHE_BUSTER = VERSION;
  self.addEventListener('install', function installEventListenerCallback(event) {
    return self.skipWaiting();
  });
  self.addEventListener('activate', function installEventListenerCallback(event) {
    return self.clients.claim();
  });

  const FILES = ['assets/img/angry-cat.jpg', 'assets/img/avengers.jpg', 'assets/img/boss.jpg', 'assets/img/cat.jpg', 'assets/img/clippy.png', 'assets/img/colonel-meow.jpg', 'assets/img/desk_flip.jpg', 'assets/img/dilbert.jpg', 'assets/img/drstrange.jpg', 'assets/img/ironman.jpg', 'assets/img/jquery.png', 'assets/img/js.png', 'assets/img/linkedin.png', 'assets/img/lisa.jpeg', 'assets/img/maru.jpg', 'assets/img/microsoft.png', 'assets/img/mike.jpeg', 'assets/img/node.png', 'assets/img/office97.png', 'assets/img/thor.jpg', 'assets/img/ts.png', 'assets/shlack-fastboot.js', 'assets/shlack-fastboot.map', 'assets/shlack.css', 'assets/shlack.js', 'assets/shlack.map', 'assets/tailwind.css', 'assets/test-support.css', 'assets/test-support.js', 'assets/test-support.map', 'assets/tests.js', 'assets/tests.map', 'assets/vendor.css', 'assets/vendor.js', 'assets/vendor.map'];
  const VERSION$1 = '1';
  const REQUEST_MODE = 'cors';

  /*
   * Deletes all caches that start with the `prefix`, except for the
   * cache defined by `currentCache`
   */
  var cleanupCaches = ((prefix, currentCache) => {
    return caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        let isOwnCache = cacheName.indexOf(prefix) === 0;
        let isNotCurrentCache = cacheName !== currentCache;

        if (isOwnCache && isNotCurrentCache) {
          caches.delete(cacheName);
        }
      });
    });
  });

  const CACHE_KEY_PREFIX = 'esw-asset-cache';
  const CACHE_NAME = `${CACHE_KEY_PREFIX}-${VERSION$1}`;
  const CACHE_URLS = FILES.map(file => {
    return new URL(file,  self.location).toString();
  });
  /*
   * Removes all cached requests from the cache that aren't in the `CACHE_URLS`
   * list.
   */

  const PRUNE_CURRENT_CACHE = () => {
    caches.open(CACHE_NAME).then(cache => {
      return cache.keys().then(keys => {
        keys.forEach(request => {
          if (CACHE_URLS.indexOf(request.url) === -1) {
            cache.delete(request);
          }
        });
      });
    });
  };

  self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
      return Promise.all(CACHE_URLS.map(url => {
        let request = new Request(url, {
          mode: REQUEST_MODE
        });
        return fetch(request).then(response => {
          if (response.status >= 400) {
            let error = new Error(`Request for ${url} failed with status ${response.statusText}`);

            {
              throw error;
            }
          }

          return cache.put(url, response);
        }).catch(function (error) {
          console.error(`Not caching ${url} due to ${error}`);
        });
      }));
    }));
  });
  self.addEventListener('activate', event => {
    event.waitUntil(Promise.all([cleanupCaches(CACHE_KEY_PREFIX, CACHE_NAME), PRUNE_CURRENT_CACHE()]));
  });
  self.addEventListener('fetch', event => {
    let isGETRequest = event.request.method === 'GET';
    let shouldRespond = CACHE_URLS.indexOf(event.request.url) !== -1;

    if (isGETRequest && shouldRespond) {
      event.respondWith(caches.match(event.request, {
        cacheName: CACHE_NAME
      }).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request.url, {
          mode: REQUEST_MODE
        });
      }));
    }
  });

  const VERSION$2 = '1';
  const PATTERNS = [];

  /**
   * Create an absolute URL, allowing regex expressions to pass
   *
   * @param {string} url
   * @param {string|object} baseUrl
   * @public
   */
  function createNormalizedUrl(url) {
    let baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.location;
    return decodeURI(new URL(encodeURI(url), baseUrl).toString());
  }
  /**
   * Create an (absolute) URL Regex from a given string
   *
   * @param {string} url
   * @returns {RegExp}
   * @public
   */

  function createUrlRegEx(url) {
    let normalized = createNormalizedUrl(url);
    return new RegExp(`^${normalized}$`);
  }
  /**
   * Check if given URL matches any pattern
   *
   * @param {string} url
   * @param {array} patterns
   * @returns {boolean}
   * @public
   */

  function urlMatchesAnyPattern(url, patterns) {
    return !!patterns.find(pattern => pattern.test(decodeURI(url)));
  }

  const CACHE_KEY_PREFIX$1 = 'esw-cache-fallback';
  const CACHE_NAME$1 = `${CACHE_KEY_PREFIX$1}-${VERSION$2}`;
  const PATTERN_REGEX = PATTERNS.map(createUrlRegEx);
  self.addEventListener('fetch', event => {
    let request = event.request;

    if (request.method !== 'GET' || !/^https?/.test(request.url)) {
      return;
    }

    if (urlMatchesAnyPattern(request.url, PATTERN_REGEX)) {
      event.respondWith(caches.open(CACHE_NAME$1).then(cache => {
        return fetch(request).then(response => {
          cache.put(request, response.clone());
          return response;
        }).catch(() => caches.match(event.request));
      }));
    }
  });
  self.addEventListener('activate', event => {
    event.waitUntil(cleanupCaches(CACHE_KEY_PREFIX$1, CACHE_NAME$1));
  });

  const ENVIRONMENT = 'development';
  const VERSION$3 = '1';
  const INDEX_HTML_PATH = 'index.html';
  const INDEX_EXCLUDE_SCOPE = [];
  const INDEX_INCLUDE_SCOPE = [];
  self.INDEX_FILE_HASH = 'ae7024191f42217240db945c62bd35a6';

  const CACHE_KEY_PREFIX$2 = 'esw-index';
  const CACHE_NAME$2 = `${CACHE_KEY_PREFIX$2}-${VERSION$3}`;
  const INDEX_HTML_URL = new URL(INDEX_HTML_PATH, self.location).toString();
  self.addEventListener('install', event => {
    event.waitUntil(fetch(INDEX_HTML_URL, {
      credentials: 'include'
    }).then(response => {
      return caches.open(CACHE_NAME$2).then(cache => cache.put(INDEX_HTML_URL, response));
    }));
  });
  self.addEventListener('activate', event => {
    event.waitUntil(cleanupCaches(CACHE_KEY_PREFIX$2, CACHE_NAME$2));
  });
  self.addEventListener('fetch', event => {
    let request = event.request;
    let url = new URL(request.url);
    let isGETRequest = request.method === 'GET';
    let acceptHeader = request.headers !== null ? request.headers.get('accept') : null;
    let isHTMLRequest = acceptHeader !== null ? acceptHeader.indexOf('text/html') !== -1 : true;
    let isLocal = url.origin === location.origin;
    let scopeExcluded = urlMatchesAnyPattern(request.url, INDEX_EXCLUDE_SCOPE);
    let scopeIncluded = !INDEX_INCLUDE_SCOPE.length || urlMatchesAnyPattern(request.url, INDEX_INCLUDE_SCOPE);
    let isTests = url.pathname === '/tests' && ENVIRONMENT === 'development';

    if (!isTests && isGETRequest && isHTMLRequest && isLocal && scopeIncluded && !scopeExcluded) {
      {
        return cacheFirstFetch(event);
      }
    }
  });

  function cacheFirstFetch(event) {
    return event.respondWith(caches.match(INDEX_HTML_URL, {
      cacheName: CACHE_NAME$2
    }).then(response => {
      if (response) {
        return response;
      }
      /**
        Re-fetch the resource in the event that the cache had been cleared
        (mostly an issue with Safari 11.1 where clearing the cache causes
        the browser to throw a non-descriptive blank error page).
      */


      return fetch(INDEX_HTML_URL, {
        credentials: 'include'
      }).then(fetchedResponse => {
        caches.open(CACHE_NAME$2).then(cache => cache.put(INDEX_HTML_URL, fetchedResponse));
        return fetchedResponse.clone();
      });
    }));
  }

}());

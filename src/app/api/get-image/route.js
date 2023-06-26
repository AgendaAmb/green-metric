const { createCanvas } = require('canvas');
import { NextResponse } from 'next/server'
export async function GET(request) {
  console.log("Request", request);
  const canvas = createCanvas(900, 900); // Ancho y alto de la imagen
  const contexto = canvas.getContext('2d');

  // Establecer el estilo del texto
  contexto.font = '20px Arial';
  contexto.fillStyle = 'black';
  contexto.textAlign = 'center';
  contexto.textBaseline = 'middle';

  // Dibujar el texto en el lienzo
  contexto.fillText("1", canvas.width / 2, canvas.height / 2);

  // Obtener la representación de imagen en formato de datos URI
  const datosURI = canvas.toDataURL();

  return NextResponse.json({ message: datosURI });
}

/* Request NextRequest[Request] {
  [Symbol(realm)]: { settingsObject: { baseUrl: undefined } },
  [Symbol(state)]: {
    method: 'GET',
      localURLsOnly: false,
        unsafeRequest: false,
          body: null,
            client: { baseUrl: undefined },
    reservedClient: null,
      replacesClientId: '',
        window: 'client',
          keepalive: false,
            serviceWorkers: 'all',
              initiator: '',
                destination: '',
                  priority: null,
                    origin: 'client',
                      policyContainer: 'client',
                        referrer: 'client',
                          referrerPolicy: '',
                            mode: 'cors',
                              useCORSPreflightFlag: false,
                                credentials: 'same-origin',
                                  useCredentials: false,
                                    cache: 'default',
                                      redirect: 'follow',
                                        integrity: '',
                                          cryptoGraphicsNonceMetadata: '',
                                            parserMetadata: '',
                                              reloadNavigation: false,
                                                historyNavigation: false,
                                                  userActivation: false,
                                                    taintedOrigin: false,
                                                      redirectCount: 0,
                                                        responseTainting: 'basic',
                                                          preventNoCacheCacheControlHeaderModification: false, done: false,
                                                            timingAllowFailed: false,
                                                              headersList: HeadersList {
      cookies: null,
        [Symbol(headers map)]: [Map],
          [Symbol(headers map sorted)]: [Array]
    },
    urlList: [[URL]],
      url: URL {
      href: 'http://localhost:3000/api/get-image?text=%22Hello%22',
        origin: 'http://localhost:3000',
          protocol: 'http:',
            username: '',
              password: '',
                host: 'localhost:3000',
                  hostname: 'localhost',
                    port: '3000',
                      pathname: '/api/get-image',
                        search: '?text=%22Hello%22',
                          searchParams: URLSearchParams { 'text' => '"Hello"' },
      hash: ''
    }
  },
  [Symbol(signal)]: AbortSignal { aborted: false },
  [Symbol(headers)]: HeadersList {
    cookies: null,
      [Symbol(headers map)]: Map(22) {
      'accept' => [Object],
        'accept-language' => [Object],
          'cache-control' => [Object],
            'connection' => [Object],
              'host' => [Object],
                'sec-ch-ua' => [Object],
                  'sec-ch-ua-mobile' => [Object],
                    'sec-ch-ua-platform' => [Object],
                      'sec-fetch-dest' => [Object],
                        'sec-fetch-mode' => [Object],
                          'sec-fetch-site' => [Object],
                            'sec-fetch-user' => [Object],
                              'sec-gpc' => [Object],
                                'upgrade-insecure-requests' => [Object],
                                  'user-agent' => [Object],
                                    'x-forwarded-for' => [Object],
                                      'x-forwarded-host' => [Object],
                                        'x-forwarded-port' => [Object],
                                          'x-forwarded-proto' => [Object],
                                            'x-invoke-path' => [Object],
                                              'x-invoke-query' => [Object],
                                                'x-middleware-invoke' => [Object]
    },
    [Symbol(headers map sorted)]: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ]
  },
  [Symbol(internal request)]: {
    cookies: RequestCookies { _parsed: Map(0) { }, _headers: [HeadersList] },
    geo: { },
    ip: undefined,
      nextUrl: NextURL { [Symbol(NextURLInternal)]: [Object] },
    url: 'http://localhost:3000/api/get-image?text=%22Hello%22'
  }
} */
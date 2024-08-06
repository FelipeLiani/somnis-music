import youtubeSearch from 'youtube-search';
const API_KEY = 'AIzaSyAdtHedLKNpmOM_Fc6Hgon6iPPyLP1CUls';

const opts: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 10,
  key: API_KEY,
};

interface YouTubeSearchResult {
  kind: string;
  etag: string;
  items: any[];
}

export const searchYouTube = async (query: string): Promise<YouTubeSearchResult> => {
  try {
    const results = await new Promise<any[]>((resolve, reject) => {
      youtubeSearch(query, opts, (err, results) => {
        if (err) {
          return reject(err);
        }
        if (results === undefined) {
          return reject(new Error('Nenhum resultado encontrado.'));
        }
        resolve(results);
      });
    });

    return { kind: 'youtube#searchListResponse', etag: '', items: results };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar no YouTube: ${error.message}`);
    } else {
      throw new Error('Erro desconhecido ao buscar no YouTube.');
    }
  }
};

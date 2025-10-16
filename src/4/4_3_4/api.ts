export async function fetchBio(person: string, signal?: AbortSignal): Promise<string> {
    const delay = person === 'Bob' ? 3000 : 300;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (signal?.aborted) {
          reject(new Error('AbortError'));
        } else {
          resolve('This is ' + person + '’s bio.');
        }
      }, delay);

      signal?.addEventListener('abort', () => {
        clearTimeout(timeout);
        reject(new Error('AbortError'));
      });
    })
  }
  
  
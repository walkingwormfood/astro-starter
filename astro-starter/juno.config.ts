import {defineConfig} from '@junobuild/config';

export default defineConfig({
  satellite: {
    id: 'fzae7-ziaaa-aaaal-ar5vq-cai',
    source: 'dist',
    predeploy: ['npm run build']
  }
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default {
//   build: {
//     // Reduces parallel reads and memory pressure
//     rollupOptions: {
//       onwarn(warning, warn) {
//         // Optional: silence circular deps or other noise
//         if (warning.code === 'CIRCULAR_DEPENDENCY') return;
//         warn(warning);
//       }
//     }
//   }
// };


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import UserStore from './store/UserStore.ts';
import AnalysisStore from './store/AnalysisStore.ts';

interface State {
  UStore: UserStore,
  AStore: AnalysisStore,
}

const UStore = new UserStore();
const AStore = new AnalysisStore();

export const Context = createContext<State>({
  UStore,
  AStore
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ UStore, AStore }}>
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      globalStyles: () => ({
        '.input': {
          input: {
            height: '72px',
            width: '232px',
            border: '1px solid #E9ECEF',
            borderRadius: '24px',
            padding: '24px',
            fontSize: '16px',
            lineHeight: '24px',
          },
          label: {
              marginBottom: '6px',
              fontSize: '16px',
              lineHeight: '22px'
          },
          button: {
            background: '#F8F9FA'
          }
        },
        '.inputMini': {
          input: {
            height: '72px',
            width: '187px',
            border: '1px solid #E9ECEF',
            borderRadius: '24px',
            padding: '24px',
            fontSize: '16px',
            lineHeight: '24px',
          },
          label: {
              marginBottom: '6px',
              fontSize: '16px',
              lineHeight: '22px'
          },
        },
        '.autocomplete': {
          input: {
            width: '410px'
          }
        },
        '.inputAge': {
          input: {
            height: '72px',
            width: '120px',
            border: '1px solid #E9ECEF',
            borderRadius: '24px',
            padding: '24px',
            fontSize: '16px',
            lineHeight: '24px',
          },
          label: {
              marginBottom: '6px',
              fontSize: '16px',
              lineHeight: '22px'
          },
          button: {
            background: '#F8F9FA'
          }
        },
        '.button': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
        },
        '.radio': {
          label: {
            paddingLeft: '8px',
            fontSize: '18px'
          }
        }
      }),
      defaultRadius: '0.5rem',
      fontFamily: 'Commissioner, sans-serif',
      fontSizes: { xs: '13px', sm: '14px', md: '16px', lg: '18px', xl: '20px'},
      headings: {
        fontWeight: 600,
        sizes: {
          h1: { fontSize: '2.5rem', lineHeight: '3.375rem' },
          h2: { fontSize: '2rem', lineHeight: '2.75rem' },
          h3: { fontSize: '1.5rem', lineHeight: '2.125rem' },
          h4: { fontSize: '1.25rem', lineHeight: '1.75rem' },
          h5: { fontSize: '1rem', lineHeight: '1.375rem' },
          h6: { fontSize: '0.75rem', lineHeight: '1.0625rem'  },
        }
      }
    }}
  >
    <App/>
  </MantineProvider>
</Context.Provider>
)

import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

import { PageTitle, PageTitleProps } from './PageTitle';

interface TopInfoPanelProps extends PageTitleProps {
  children?: ReactNode;
  titleComponent?: ReactNode;
}

export const TopInfoPanel = ({
  pageTitle,
  titleComponent,
  withMarketSwitcher,
  bridge,
  children,
}: TopInfoPanelProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.header',
        pt: { xs: 10, md: 12 },
        pb: { xs: 18, md: 20, lg: '94px', xl: '92px', xxl: '96px' },
        color: '#6a6a9e',
      }}
    >
      <Container sx={{ pb: 0 }}>
        <Box sx={{ px: { xs: 4, xsm: 6 } }}>
          {!titleComponent && (
            <PageTitle
              pageTitle={pageTitle}
              withMarketSwitcher={withMarketSwitcher}
              bridge={bridge}
            />
          )}

          {titleComponent && titleComponent}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: { xs: 3, xsm: 8 },
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

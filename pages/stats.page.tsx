import { MainLayout } from 'src/layouts/MainLayout';
// import { ContentContainer } from '../src/components/ContentContainer';
import { StatsTopPanel } from 'src/modules/stats/StatsTopPanel';

export default function Stats() {
  return (
    <>
      {' '}
      <p>Submission for Spheron</p>
      <StatsTopPanel />
    </>
  );
}
Stats.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

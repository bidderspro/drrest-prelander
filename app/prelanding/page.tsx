import { Metadata } from 'next';
import PreLandingPage from '../prelanding';

export const metadata: Metadata = {
  title: 'Dr. RestRight - Better Sleep. Healthier Life.',
  description: 'Discover Dr. RestRight\'s proven solution for restful nights and better sleep quality.',
};

export default function PreLanding() {
  return <PreLandingPage />;
}

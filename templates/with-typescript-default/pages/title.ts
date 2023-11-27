import type { PageHandler } from 'zely';
import { GET } from 'zely/methods';

export default [GET({ title: 'Zely App' })] satisfies PageHandler[];

import type { PageHandler } from 'zely';
import { GET } from 'zely/methods';

export default [(ctx) => GET({ message: (ctx.request as any).message })] satisfies PageHandler[];

import DashboardCard from '@/components/dashboard/dashboard';
import PostsTable from '@/components/posts/PostsTable';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User size={72} className="text-slate-500" />}
        />
        <DashboardCard
          title="Comments"
          count={1250}
          icon={<MessageCircle size={72} className="text-slate-500" />}
        />
      </div>
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}

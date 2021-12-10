import axios from 'axios';
import { IProject } from 'models/project';
import { IResume } from 'models/resume';
import { useEffect } from 'react';
import useSWR from 'swr';

const TestPage = () => {
  const { resume, isLoading } = useResume();
  const { projects } = useProjects();
  useEffect(() => {
    console.log({ resume });
    console.log({ projects });
  }, [resume, projects]);

  return <div>this is a test page</div>;
};

export default TestPage;

const useResume = () => {
  const { data: resume, error } = useSWR('/api/resume', (url: string) =>
    axios.get<IResume>(url).then((res) => res.data ?? {})
  );

  return {
    resume,
    isLoading: !resume && !error,
    error,
  };
};
const useProjects = () => {
  const { data: projects, error } = useSWR('/api/projects', (url: string) =>
    axios.get<IProject[]>(url).then((res) => res.data ?? {})
  );

  return {
    projects,
    isLoading: !projects && !error,
    error,
  };
};

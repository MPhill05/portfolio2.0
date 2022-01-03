import dynamic from 'next/dynamic';

const FileViewer = dynamic(() => import('react-file-viewer'), {
  ssr: false
});

export default function Resume() {
  return (
    <FileViewer fileType="pdf" filePath="/files/resume.pdf" />
  );
};
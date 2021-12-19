import { useRouter } from "next/router";
import Modal from 'react-modal';
import '../../styles/projectModal.styles';

Modal.setAppElement('#__next');

const ProjectModal = () => {
  const router = useRouter();
  const { projectModal } = router.query;
  console.log(projectModal)
  console.log({ router })
  return (
    <div>
      Project Modal Page {projectModal}
      <Modal
        isOpen={true}
        onRequestClose={() => { }}
        contentLabel='Project Info'
        overlayClassName={() => router.back()}
      // className='text-black'
      >
        <a className="text-black">
          {projectModal}
        </a>
      </Modal>
    </div>)
}

export default ProjectModal;
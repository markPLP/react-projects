import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  // index her to have a dynamic classname if index is > 10 or on shaded boxes
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copied to clipboard');
      }
    } else {
      toast.error('Clipboard not accessible');
    }
  };

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;

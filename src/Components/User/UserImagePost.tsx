import React from "react";
import styles from "./UserImagePost.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helpers/Error";
import { IMAGE_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Helpers/Head";

interface ImgState {
  preview?: string;
  raw?: File;
}

const UserImagePost = () => {
  const name = useForm(false);
  const from = useForm(false);
  const from_url = useForm(false);
  const [caption, setCaption] = React.useState("");

  const [img, setImg] = React.useState<ImgState>({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate("/account");
    }
  }, [data, navigate]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData();

    if (img.raw) formData.append("img", img.raw);
    formData.append("name", name.value);
    formData.append("from", from.value);
    formData.append("from_url", from_url.value);
    formData.append("caption", caption);

    const token = window.localStorage.getItem("token");
    if (token) {
      const { url, options } = IMAGE_POST(formData, token);
      request(url, options);
    }
  }

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files && target.files[0]) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    }
  }

  return (
    <section className={` ${styles.imagePost} animeLeft`}>
      <Head title="Posts" description="Upload your Wappu image" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Image - should be a JPG or PNG file with at least 1000 X 1000 pixels and can't be greater than 1MB:"
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          accept="image/png, image/jpeg"
          required
        />
        <Input
          label="Name:"
          placeholder="The Original"
          type="text"
          name="name"
          {...name}
          required
        />
        <Input
          label="From:"
          placeholder="WordPress Japan"
          name="from"
          {...from}
        />
        <Input
          label="From URL:"
          placeholder="https://ja.wordpress.org/"
          type="text"
          name="from-url"
          {...from_url}
        />
        <label htmlFor="caption" className={styles.label}>
          Caption:
        </label>
        <textarea
          className={styles.textarea}
          id="caption"
          name="caption"
          rows={3}
          maxLength={150}
          placeholder="Write a caption maximum of 150 characters..."
          value={caption}
          onChange={({ target }) => setCaption(target.value)}
        />
        {loading ? (
          <Button disabled>Uploading...</Button>
        ) : (
          <Button>Publish</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url( '${img.preview}' )` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserImagePost;

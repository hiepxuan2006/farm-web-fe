import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

import "./AddProduc.scss";
import { getALLCategory } from "../../store/action/categoryAction";
import TextEditor from "../TextEditor";
import { createProduct } from "../../store/action/adminAction";

export const AddProduct = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.category);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getALLCategory());
    };
    getCategory();
  }, []);
  const [createForm, setCreateForm] = useState({
    Name: "",
    price: "",
    description: "",
    category: "",
  });
  const { Name, price, fileImage, description, category } = createForm;
  const [urlImage, setUrlImage] = useState("");

  const handleOnchange = (e) => {
    setCreateForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const onchangeFileImage = (e) => {
    setCreateForm({ ...createForm, fileImage: e.target.files[0] });
  };
  useEffect(() => {
    if (!fileImage) {
      setUrlImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(fileImage);
    setUrlImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [fileImage]);
  useEffect(() => {
    setCreateForm({
      ...createForm,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  }, [editorState]);
  const data = new FormData()
  data.append('Name', Name)
  data.append('price', price)
  data.append('fileImage', fileImage)
  data.append('description', description)
  data.append('category', category)
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const result = await createProduct(data)
    console.log(result);
    if (result.data.success) {
      setCreateForm({
        Name: '',
        price: '',
        fileImage: '',
        description: '',
        category: '',

      })
      setEditorState(EditorState.createEmpty());
      alert('thanh cong')
    }
  };
  return (
    <div className="addproduct">
      <div className="heading">
        <h1 style={{ fontSize: "30px", margin: "20px 0" }}>
          Thêm sản phẩm mới
        </h1>
      </div>

      <form className="form__create" onSubmit={handleCreateProduct} encType="multipart/form-data">
        <div style={{ marginBottom: "30px" }} className="form__input">
          <label
            style={{ fontSize: "18px", padding: "20px 0", display: "block" }}
          >
            Tên sản phẩm
          </label>
          <input
            name="Name"
            onChange={handleOnchange}
            value={Name}
            style={{ width: "100%", outLine: "none", fontSize: "18px" }}
            type="text"
            className="input-form"
          />
        </div>
        <div style={{ marginBottom: "30px" }} className="form__input">
          <label
            style={{ fontSize: "18px", padding: "20px 0", display: "block" }}
          >
            Giá tiền:
          </label>
          <input
            onChange={handleOnchange}
            name="price"
            value={price}
            style={{ width: "200px", outLine: "none", fontSize: "18px" }}
            type="text"
            className="input-form"
          />
        </div>
        <div className="auth__form-input">
          <input onChange={onchangeFileImage} name="fileImage" multiple='' type="file" />
        </div>
        {fileImage && (
          <img
            accept="image/*"
            style={{ height: "50%", width: "50%", marginTop: "20px" }}
            src={urlImage}
            alt=""
          />
        )}
        <TextEditor
          value={createForm.description}
          label="Nhập mô tả sản phẩm"
          state={editorState}
          onChange={(values) => setEditorState(values)}
        />

        <div className="form-category">
          <p className="form-category-heading">Loại sản phẩm</p>
          {categories &&
            categories.map((item, index) => (
              <label className="form-category-item" key={index}>
                <input
                  type="radio"
                  value={item.path}
                  onChange={handleOnchange}
                  name="category"
                  ckecked={category}
                />
                {item.Name}
              </label>
            ))}
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};

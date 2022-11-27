import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_ITEM } from "../redux/Products/actions";
export default function EditModal(data) {
  const dispatch = useDispatch();
  const [productname, setProductName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vendor, setVendor] = useState("");
  useEffect(() => {
    setProductName(data.data.productname);
    setImg(data.data.img);
    setDescription(data.data.description);
    setPrice(data.data.price);
    setVendor(data.data.vendor);
  }, [data]);

  const editSubmit = () => {
    let editedObj = {
      id: data.data.id,
      productname: productname,
      img: img,
      description: description,
      price: price,
      vendor: vendor,
    };
    dispatch({ type: UPDATE_ITEM, payload: editedObj });
  };
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header text-uppercase mb-2">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              # Edit Product
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {" "}
            <div className="container-xxl py-6">
              <div className="container">
                <form>
                  <div className="row g-0 justify-content-center">
                    <div className="col-lg-8 ">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              value={productname || ""}
                              onChange={(e) => setProductName(e.target.value)}
                            />
                            <label htmlFor="name" className="form-label">
                              Product Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              id="price"
                              name="price"
                              className="form-control"
                              value={price || ""}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                            <label htmlFor="price" className="form-label">
                              Price
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              id="vendor"
                              name="vendor"
                              className="form-control"
                              value={vendor || ""}
                              onChange={(e) => setVendor(e.target.value)}
                            />
                            <label htmlFor="vendor" className="form-label">
                              Vendor
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              id="img"
                              name="img"
                              className="form-control"
                              value={img || ""}
                              onChange={(e) => setImg(e.target.value)}
                            />
                            <label htmlFor="img" className="form-label">
                              Image URL
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              id="description"
                              name="description"
                              className="form-control"
                              value={description || ""}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                            <label htmlFor="description" className="form-label">
                              Description
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                editSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

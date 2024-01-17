import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { useForm } from "react-hook-form";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row, CardFooter, CardHeader, Button, Container } from "reactstrap";
import { Btn, H5 } from '../AbstractElements';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { baseUrl, imgUrl } from '../url'
import Compressor from 'compressorjs';
import { ProgressBar } from "react-bootstrap";
import { Image, Minimize, SkipBack, Trash } from "react-feather";



function ProductForm({ autoData, onSuccess }) {
  const [productId, setProductId] = useState(autoData.product_id);
  const [name, setName] = useState(autoData.name);
  const [description, setDescription] = useState(autoData.description);
  const [category, setCategory] = useState(autoData.category_id); // SET category id from db 
  const [price, setPrice] = useState(autoData.price);
  const [discounted, setDiscounted] = useState(autoData.discount_percentage);
  const [percent, setPercentage] = useState(autoData.discount_percentage);
  const [productColor, setProductColor] = useState(autoData.color);
  const [productHex, setProductHex] = useState('');
  const [imageOne, setImageOne] = useState([]);
  const [imageTwo, setImageTwo] = useState([]);
  const [imageThree, setImageThree] = useState([]);
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(null);
  const [position, setPosition] = useState(autoData.position);

  useEffect(() => {
    axios.get(`${baseUrl}get_all_categories`)
      .then((response) => {
        console.log('category', response.data)
        setData(response.data.data)
      }).catch((error) => { console.log(error) })
  }, [])

  useEffect(() => { console.log(productId, 'productId') }, [productId])


  const handleSubmitMain = () => {
    // new Compressor(imageOne, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageOne(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // });
    // new Compressor(imageTwo, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageTwo(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // }); new Compressor(imageTwo, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageTwo(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // });

    if (name === '' || description === '' || category === '' || price === '' || percent === '' || productColor === '' || imageOne === '' || imageTwo === '' || imageThree === '') {
      toast.error('Please fill all categories')
    } else {
      const formData = new FormData();
      formData.append("product_id", productId);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category_id", category);
      formData.append("price", price);
      formData.append("discount_percentage", percent);
      formData.append("color", productColor)
      formData.append("color_hex", productHex)
      formData.append("image1", imageOne)
      formData.append("image2", imageTwo)
      formData.append("image3", imageThree)
      formData.append("position", position)
      console.log(formData)
      toast.warn('Please Wait till we upload files. It may take some time depending on internet speed');
      axios.post(`${baseUrl}updateMainProduct`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          {
            const progressPercentage = ((progressEvent.loaded / progressEvent.total) * 100);
            setProgress(progressPercentage);
          }
        }
      }

      )
        .then((response) => {
          console.log("test", response)
          setProgress(null);
          toast.success(response.data.message);

          //if(response.status===201){
          //  toast.success('Product Added Successfully')
          setProductId(response.data.datas.product_id)
          setTimeout(() => {
            onSuccess && onSuccess();
          }, 2500);
          //  console.log(response.data.data.product_id)

          //}else{
          //  toast.error('There was some error')
          //}
        }
        ).catch((error) => {
          console.log("test err", error)
          toast.error('There was some error')
        })
    }
  }

  return (
    <Form className="form theme-form">

      {progress &&
        (
          <div className="fixed bg-white px-10 py-4 top-0 left-0" style={{
            position: "fixed",
            minWidth: "250px",
            zIndex: "100",
          }}>
            <ProgressBar animated now={progress} label={`${Math.floor(progress)}%`} />
          </div>
        )
      }

      <ToastContainer />
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label className="mb-2">Product Name <span style={{ color: 'red', fontSize: 14 }}>* make your product name unique</span></Label>
              <Input type="text" placeholder="" value={name} onChange={(e) => { setName(e.target.value) }} required />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Label>Product Description <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="textarea" rows="3" value={description} onChange={(e) => { setDescription(e.target.value) }} required />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Label>Category <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <div className="mb-3">
              <select className="form-select" required aria-label="select example" onChange={(e) => setCategory(e.target.value)} >
                {data.map((info) => {
                  return (
                    <option value={info.category_id}>{info.category_name}</option>
                  )
                })}


              </select>

            </div>
          </Col>
          <Col>
            <Label>Position <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} required />
          </Col>
          <Col>
            <Label>Discount % <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="text" value={percent} onChange={(e) => { setPercentage(e.target.value), setDiscounted(price - price * percent / 100) }} />
          </Col>

        </Row>

        <Row className="mt-3">

          <Col>
            <Input type="text" placeholder="color name" value={productColor} onChange={(e) => { setProductColor(e.target.value) }} required />
          </Col>
          <Col>
            <Input type="color" placeholder="orange.." value={productHex} onChange={(e) => { setProductHex(e.target.value) }} required />
          </Col>
        </Row>
        <Row className="mt-3">

          <Col>
            <Label>Front Image <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image'
              accept="image/png, image/jpeg"
              onChange={(e) => { setImageOne(e.target.files[0]) }} />

            {
              autoData.image1 &&
              (
                <div className="flex flex-col">

                  <Label>Old Preview</Label>

                  <img width={100} height={100} src={`${imgUrl}/${autoData.image1}`} />
                </div>
              )
            }

          </Col>
          <Col>
            <Label>Mid Image <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image'
              accept="image/png, image/jpeg"
              onChange={(e) => { setImageTwo(e.target.files[0]) }} />
            {
              autoData.image2 &&
              (
                <div className="flex flex-col">
                  <Label>Old Preview</Label>
                  <img width={100} height={100} src={`${imgUrl}/${autoData.image2}`} />
                </div>
              )
            }
          </Col>
          <Col>
            <Label>last Image <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image'
              accept="image/png, image/jpeg"
              onChange={(e) => { setImageThree(e.target.files[0]) }} />
            {
              autoData.image3 &&
              (
                <div className="flex flex-col">
                  <Label>Old Preview</Label>
                  <img width={100} height={100} src={`${imgUrl}/${autoData.image3}`} />
                </div>
              )
            }
          </Col>

        </Row>
        <Col>
          <Label>Position <span style={{ color: 'red', fontSize: 14 }}>*</span></Label>
          <Input type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} required />
        </Col>
      </CardBody>

      <CardFooter>
        <Row>

          <Col>
            <Button color="primary" className="me-2" onClick={handleSubmitMain}>
              Submit
            </Button>

          </Col>

        </Row>

      </CardFooter>


    </Form>
  )
}



export default function EditProductForm({ data, onClose }) {


  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '20',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.9)',
        alignItems: 'center',
        justifyContents: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}

      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose && onClose();
      }}
    >

      <Btn
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose && onClose();
        }}

        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: '30',
        }}

        color="danger"
      >
        <Minimize size={14} color="white" />
      </Btn>
      <ToastContainer />
      {/* <Breadcrumbs parent="Edit Product" /> */}
      <Card
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}

        style={{
          margin: 'auto',
          overflow: 'scroll',
        }}
      >
        <CardHeader>
          <H5>Edit Product Form</H5>
        </CardHeader>

        <ProductForm autoData={data} onSuccess={onClose} />
      </Card>
    </div>
  )
}

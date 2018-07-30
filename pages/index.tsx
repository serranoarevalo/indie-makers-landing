export default () => (
  <div>
    <h2>Build products, together.</h2>
    <h3>
      Join a community of people building awesome products and learning from
      each other.
    </h3>
    <style jsx>
      {`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 75%;
        }
        h2,
        h3 {
          background-color: #f2fefe;
          width: auto;
          display: inline;
          font-weight: 400;
        }
        h2 {
          margin-bottom: 10px;
          display: inline;
          font-weight: 600;
        }
        h3 {
          font-size: 40px;
          line-height: 1.5;
        }
      `}
    </style>
  </div>
);

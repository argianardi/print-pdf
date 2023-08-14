import { useEffect, useRef, useState } from 'react';
import './styles/App.css';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState('');
  const [count, setCount] = useState(1);
  useEffect(() => {
    getJokes();
  }, [count]);

  const getJokes = async () => {
    await axios
      .get('https://candaan-api.vercel.app/api/text/random')
      .then((res) => {
        setJokes(res.data.data);
      });
  };

  const componenRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componenRef.current,
    documentTitle: 'Print-Jokes',
  });

  const DATA = [
    {
      ID: '1',
      JobTitle: 'Electrician',
      EmailAddress: 'Hank_Olson9358@karnv.site',
      FirstNameLastName: 'Hank Olson',
    },
    {
      ID: '2',
      JobTitle: 'Executive Director',
      EmailAddress: 'Russel_York3534@lhp4j.net',
      FirstNameLastName: 'Russel York',
    },
    {
      ID: '3',
      JobTitle: 'Web Developer',
      EmailAddress: 'Tiffany_Pearson9861@avn7d.directory',
      FirstNameLastName: 'Tiffany Pearson',
    },
    {
      ID: '4',
      JobTitle: 'Bookkeeper',
      EmailAddress: 'Davina_Allen2270@gnjps.website',
      FirstNameLastName: 'Davina Allen',
    },
    {
      ID: '5',
      JobTitle: 'Retail Trainee',
      EmailAddress: 'Melania_Attwood2908@hepmv.app',
      FirstNameLastName: 'Melania Attwood',
    },
    {
      ID: '6',
      JobTitle: 'Designer',
      EmailAddress: 'Penny_Gregory4219@gnjps.autos',
      FirstNameLastName: 'Penny Gregory',
    },
    {
      ID: '7',
      JobTitle: 'Systems Administrator',
      EmailAddress: 'Peter_Waterson1805@gnjps.auction',
      FirstNameLastName: 'Peter Waterson',
    },
    {
      ID: '8',
      JobTitle: 'Designer',
      EmailAddress: 'Jasmine_Graham9393@ds59r.biz',
      FirstNameLastName: 'Jasmine Graham',
    },
    {
      ID: '9',
      JobTitle: 'Doctor',
      EmailAddress: 'Henry_Connor9433@xqj6f.website',
      FirstNameLastName: 'Henry Connor',
    },
    {
      ID: '10',
      JobTitle: 'Webmaster',
      EmailAddress: 'Carl_Hewitt5779@chkzl.info',
      FirstNameLastName: 'Carl Hewitt',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <div ref={componenRef}>
        <h1
          className={`py-2 my-6 text-2xl font-bold text-center border-dashed border-b-2 border-blue-500 `}
        >
          Jokes Receh Hari ini``
        </h1>

        <p className="px-6 py-5 mx-auto mt-5 font-medium text-center">
          {jokes}
        </p>
      </div>

      <div className="flex items-center justify-center gap-20 px-6 ">
        <button
          type="button "
          className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-blue-500 rounded-md active:bg-blue-500 active:text-white"
          onClick={handlePrint}
        >
          Print Jokes
        </button>
        <button
          className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-blue-500 rounded-md active:bg-blue-500 active:text-white"
          onClick={() => setCount(count + 1)}
        >
          Bikin Ngakak Lagi
        </button>
      </div>
    </div>
  );
}

export default App;

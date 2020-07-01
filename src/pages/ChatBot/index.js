import React from 'react'
import Bot from 'react-native-chatbot';

//Instruções que o chatbot irá seguir:
const steps = [
  {
    id: '1',
    message: 'Olá, eu sou o PIV, qual é o seu nome?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'ola',
  },
  {
    id: 'ola',
    message: 'Olá {previousValue}',
    trigger: '3',
  },
  {
    id: '3',
    message: 'O que você quer saber de mim?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Quantos profissionais temos disponível agora?', trigger: '5' },
      { value: 2, label: 'Quais são nossos metodos?', trigger: '6' },
      { value: 3, label: 'Como agir quando se tem ansiedade?', trigger: '7' },
      { value: 4, label: 'Quero nada não, tchau', trigger: '8' },
    ],
  },
  {
    id: '5',
    message: 'Estamos com 5 profissionais disponíveis!',
    trigger: '3',
  },
  {
    id: '6',
    message: 'Métodos para relaxar como meditação e yoga!',
    trigger: '3',
  },
  {
    id: '7',
    message: 'Vai aí 5 dicas básicas 1- Exercite o controle da sua respiração 2- Evite ter pensamentos negativos. 3- Organize seu dia com antecedência. 4- Evite atividades estressantes. 5- Realize exercícios físicos. ',
    trigger: '3',
  },
  {
    id: '8',
    message: 'Até mais',
    end: true,
  },
];
export default function Chat() {
    

    return (

          <Bot 
            steps={steps} 
            // Avatar do Bot e do usuário //
            botAvatar='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEX////0wqGogmVQLUvc1duWcWDTpJBOKkndcmJMJ0dEGD5NKkpFGj+rhWZHHkFCFDxKI0T6x6RHI0fw7fBADjr29Paai5iZdGFGIkbf2d6JY2jQys8+Cjjl4OTKwsnYqJPs6OurnqlrUGe7sbpiRV6Kd4eRf448ADaAa31ePllWNFFHKUqEYFpyT1W/tb14YHXFZl6pm6dkQVHsu53hsZeKZlxsSVPAlIU+GEOWb2+ofnh6ZHfkdWPVbmF9Q1KXT1Z7WFd3Ul6OZ2plN06qWFnJaF6ISFNZNk21in+gd3RrR1liPlR9WGJwPFA5vSbgAAAWVklEQVR4nO1diXabyBJ1DHKHxYAFaLEEQqslbEsj77GSvDiZGSVx3v//zuuqBrEIySDkgM/LPXMmceJYXKq69u4+OPiDP/iD/xeYpq47TcvRdd00i36YfUPn+7XxQJCNtkH/ExVusBjW+k296OfaE/juzFVlTSOE80GIoGmyyg2G9puXptN1VUUIuEVAeYpqb/qWSbZmhuKxkySpSsH+T3+RJI+mIMqjZtEPuiPsnip47KrS892X20qdoXJ78eXyiqNEGUlNHb9FjvxAFDx6z18qh4fHFIcMx+z39dsvyyqTpabUin7erNCHbY/f88VhwC0K+POLK8ZRUaZFP3Mm9InC+F3WN7ALWNYvkSMxFrzzZozOUCU+v630PJL1S1yRgkgms+5bcJLWAAVYvTtMww85VpZVz3/Iyqj0HG1cgdKykpYf6uoF57sPRbSLprAdfdTQ6mVqAXocDy/BfeCKVEttWLtAUKreZuPHONZvL55xRcqzomlsxryNGprKwiSQPD6+fQaKSq9oIpswRYJXGTU0gsolUlwUTSUZLYhCKcE8qNQvUFFHRZNJgkOQYA4BUtQ9imq/aDrrMCfUTUjPufgBQ4/imVU0oTWMqKOX3HpOhocVShHWojAomlAcLRWszI5WNMqwUr+iFOVu0ZSiQB3dxQ/GUQeKFfD8mlM0qQhqMpXgXX6CjCEuRW1YNKkwLANiyvz8DpmaUj2ldtngi6YVwlDbj476DCu3IMQSRW/WWX5P6IMtxPodpXhWnvoNijBLvvQiw0oFhDgumpgPi7pCsicR+gxRiEpZ3H5N2Z8I/YWIK1GZF02NwZyQnCKMlOM8hmBOSUkCGwhnchnS44u7i+Cfewwr4BPVcjiMmpbLFx4fXlWlakDRZ1hZUltTjixKIHnCmeM6VqGkVczuG1MIwIlbNDlAy8ijpMcXrMoWuFOfIdqadhmsaVfZXUmPDy+rXhlx9ZJWDCsuzTDKkAnPhJ3jmeP6EguIDaApxWUISVQpnD5kvl92Ynh8gdXD6vLoRyOUmqwYfgGXWDQ9GtCIOy7D48M71NCH0+uTdyBL/6dUwgtRLD42nQLDXQRYQQ2Vqt9P3r07OXqgv19GZVip0zcgtoomeDAHQ5NZhL4Aq883lCCl+JV+KV0eRxnSbxCLbyyONE56zsrw+Jb1KBpf3yHBd++uXZrzVrHOEzCkPr8E7eGFltnfH9c9AXL3Hj8qxHswNssoQxqalqCW0RN87UrL79Br+z78ul4RpBSfwNhA8BYwpFGNUHyiPyCZnMXx4QVr3VeX9yF+oKcPXvAWOETqLoTCuzQmXT9SamdxfHjL+r1S48N1lOC7k8cGC97qERkWz5Amh9JFOoZUfowfefh5FOMH+Mmc4ptlSPm5jF/DvX+XQPDkqIHBW9kYDlIxPD6mi4plEVXu8SSBH1D8AE7xrl5CS/MSQ7r8rrwhr6q0tgBDAKcoXdTLx3CrLQXxLatshK9R/bGFH3WKYE/dlQzvCCcUn1xs94dAz/XUU2pIj9v4AcXTsJ6WJKYZb0wPj6nhh+k8b86y8fN7kn2J4oajwhY8PS1JXFpLirxh/LB+cef69GiOe3r0Mj8qxO9gTzlPTcuRW8SzJ5ytrFxcLVdjsqT6wFH1TMEPKD5Bs/yq7ueHcvGFmhYwrPvkDg9vL+6kalXyR5+lamP5oZOSHuAapqbZUoQilVw0v1WOD4uuckn1srqacKYLqtp4/pBKO0NCRHsqXVXqWE4sQ9Vbg9T19u4qSg6E13h67KTVzhDFrxjacJe3UIkq3pQeHEwITqqHyQG75w/32dkhOr8a7KfQ/5WB4VjjQpCoYkrPvx6PKLud6FEcdb42VjsYjMILpl01pJYP1Z+nj0c373ZnhwyPOo9u1eeoFuwuID2kzrzReBCePnw/us5JzmN41Dn6sWxUccOCVvAUn96mBE+/36NW5uaGuD4CdDr3jz8+PFFrqhU74M4blOHNvsiFGCLJzj11/+1iJ7+hOyrd7I8exc1RgHuu8LEai2ppo/N6DKuFN9hMGnc37veooxGGnUfKUCl2HUKZpvpjrww7IYZfBY5MCt5KA+nh0z4Jhhke/aRJftEz312Zqun1PhmGCB6VYabGkve9EEMEIR0ufuAEFuKH13CH3jJ0C98IhVN7r8QQUsziq4mQ4zeSavQ74iaqpGUYxtCovTvdH8PAlHZOoY9fuJJiE5hw+7OmIWdB85YSKCmbidqjNQ1E+L1ainIpBXQQn/ZFMDA0HWgKi6XYGzzfZ2x6HRFhCbr4AAemop73xHBlSjvQLzWKr3gjYMtT9XQ/ST4zNDT5hQGbUtgZgA5l6qr79LQHt9hBBf11+gTt4hI0LTz0YfMokYRq7mwfl+G9IOCBKEo5ViFi1MbiX/5M8RrDUTZzqk2KphVGV1Chuv8zrwzR0MB2Z6KpvVJ4ihX0KY1t8pdsOl5xhkzGpfD1EZiE5lGPOdUUlBQmMsTi24YJoHlUXjVFQ/NcknB0HbbKcQ/5rCksQxhSLNsWWQ/Qw8ipph3PkmqlVFJstJFlLoawDJekBKNeG2CLOdX0utxKSgEt/TxqesOqT5zhFM1kE8ZgTXMwhGUIlrQM4wnJAGtazeH0MSYts5JinyZHbHrtWdK2UzSRzaBOn+zu9G88d19WSwoANW3sbE29mLTESkrjby5Hsw2U9FQoa0zqA2r80o4ivGHNppLGpD6wxr9j3c3r+Zahjr8NMLr/tBPDa1ZfI0K5Et81YMd0J1tzw+xMSbZvb4bZ3tUldpidaRe/pfIFDHds1Fyz6ZlSDJRuRxMmbHYIv29YPFPGY8ziGENrOrsQmasgpaogbgA6jO9ZhXjtVaDKHM+s0KNC5LKK8IaJ0C25q2DA4DTrSmSGtPDhmZSgQuSEbD7xBhPDomdJU4NvY7ctC8NOB3aSvI1VCID4O9MEyvURdHzLcVZLKkBDUXrOpKQwL26U/JDkMLrgMdLPgl2jjpbiHJPUGNAnfkidRd3A2SZl2MSVAXAKX/rI5h6PnX0zZoahD4XFp5QifC7ZKYnpALuFGl/T6OkJTCUQrgQDbNmgw46vRopM8eQDLEL1DdlRH3hwzcvRGx4WUZbhp2zo4SUeL2UZ3sbfkhfYEsF7m9q2S/EE/cSbcxUI2OOtwd7Ehy2en61BnA56I1lFAJMGbsq8C+cLN35tZIi7RYXJ5E3FpB4gSVQsdt9F9WfiUQon1z9h+Enr8eBZyjKGmBatgddDsmXYgrk8Wp9bPOkswRaJM77ZV96cNZ0bq0YnL8ARAo1fRydRdL7CDlFi1Cye58F3GkU/dBaM8Hhv0cEvHFdhx378PA3wxD2AAAWtf6DzfBMmxt6QEM2FiC7Ob3SaY4Owfd4BcG87UXvgIyhDPD9TLHs934feU9hxGIF1nLrq2g16RFAFVv3V+eYMo4M3QtFywQnCbR7hnQTTMafIagBZ4YLhQ9729vSrb4FiC2+UE9zeWj/e4lsB+HAIo0NdB8oYXLlvQkJMRYLTvY5tpB/ThuhAG/Vh9YplpzjHC60UmO6lDiBt4QW4abbVB9dZcikO0UuoSAwe20gXTsP+pkWTOn4N3GKJKZoLmQvWEsxihvu5di2KYGsobJxS+k0eYhtKUZnMnd/85CnBvAQx/IISJBfGqkrfPVO0MJT2apFSV0EGlCBQhGVMZG1Y+NbYBLQm6CWCqi5sFgpyIubxQlB8+cJOYnV6wDOKeDcr0cRByQbZ9f4E4xaBC3Xhod9NfCHWlBjDVbMX9i8K9FdPit6bEFSpRMpq1QQZQxYycMJ/fBYajtExz3WXS/gvHNPBX8goagspdv1XQRS5JMpqzxT/2t/YEYBUMwOvPwU7++3T+/fvP33jQjeswHiKzCqJDlC0wVxpGv5ETe4Vrqxm12XX/gpyWDAMYCSDKuGCrtPz/3x8//E/59SzrxboJGRyIc0Ahtp8yLG3JohKocpq1WSmnpo6swdw40a0w9kTQkU03OF2/tenv87DrwJiH3m1eE2eb8ngO6xWbSALTFmNwpTVXsiK9wwj+gwLYa1wPVWpw2iGv+IkF2//Wz1z5CVQik3GkPp/vj9TWUSuqb0iZlDsHvt8mgTNkRdksbIT+R4zGrqtjgULnAhM30TL3bzo+X++2bSHmq+sk9/Nsc+WH6G2wH8+qHEbsZEtMCNnjv9VS/QZrqI58CixKhuUsLroOihJfj5QmLKKWvf3NfnN/gQjbBp8jIIl0pfXuw+mHD6BFHyidC6FMkeHrs34SHCYIXDsLxSNceTmv6l7M3UxRSIiiVzBDPtJ1mZD8TgC/93DTRj//fRfKTCec3l9Q7oRYciU1eMok9/RY7RmKD9BdGNsmkZC5dppB3PbuoLugjoL3+bCOl07ZBaM69Tiw2i2RoLG3urgte2qWTMwh0+wbrqRdMwhLDTvHCQoEp//9RG8hcoWIljXtYYFVQXRPjDjHGsTNDpCe/Sqy9GesASpl9DtM4WkiiA0aFS27GAZLj+9/7RcaTN1FetZsoIMD9Y48nMsS3KK+4pxDrs1XUuekASVS2iSBaEbDEh/pjHNZ8l7EzBZtH4sIlVHzxKtcRwxA66+1tCGhe9QEIcb1ATyvPXhSTBAmAs6NBA//5sy/JsuRA3+aiwkbXHiSGBr4xztHqqqJr3KIPEUoyixt7G8BA5dW//jgSda8CbSPzTy/kdiB+k5VIHFdXVwSdgk63yUY5eloa8xaItFJnK2xVxDUNNm8rXsQM7oJy32Ar69B3wDf8DWpRr8c9NmNmdCok4nrqpjlXuVG9ixFaFp2+qDGNTAU+pD0QgdYGWwAXyqX+f/fqQEP/57DksTCjkhV6G7hjh2DhjDyHs0Y2KcY7Sv7rnNMYIXJ/e2xhQorBZ1KG0tMv9DmRNBb4Kv+Btl+Df4CyzGqc7qu+CoV+1s6IBWKzFNiYlxipq6X4o1IGi8UHOHczCVfp9jDiUw6ToEO13gf/4JGX6iDGUbXEXoITHzoDlvrbfOkOXGIec423cnB5vV7ZcipiY+o1fPCBtVCN0G9MG5bx+R4cdvMHwhxE6bm7BCAcQu6039mMHhx/Aa1b31/u02l2abgBU6MzkySNkUWasGMnxkCFk+iY+Y4KfEs6sV4otxCFI09uT7LSxFvxzz6u6qgxYrZyxYAe38r/cMELhxa8dcBQXHpAsR4hTHcL3rnq5inWkpdR70TMDHjJ0b6yeG733gV/HEsIk9AWEDwzXPiNPke9luikYu1cjS/Ew5Gw+TZmEHIF3p84rhZylJF0HzhKGqkbNE7YuaG54HlRH3sBR1nBRNl3rac/5AjuTwHtBQ+svQW4ihkr//UQRaNOZwskFh4k4D1n1QQdgZ0L0U0w8O4ijUupKBYTn/ZyXDf84Tt+FBzNDeElTE9BQ/K3cUDlcfZDkGFsafFWftj6FgEzCE4HutpkPRVLYviLjPgIWf+3xTOKksy/54YJjwRqBYymI2BFQy1r+pCStr65JvRoUIg8h5hehoGXd18hCgy+ufilWoTyFvsa75LUheiLwtMYq7DLCnOacau/Kq5JASUKtIcC6WFvL4n5Ou5rDh3QjcdqWLC1HOPdUIGXrGw5j74NbWkxssB78P4tJ4BIHNUYF74W3GV+Ig7+XdUCpLSFK3Ay+EWIuB4AR+SPE9XyHHXEUXYjZt8qJXiqkp5qR5En6a4RDiZP1XcyMpjoWrr1gG7K5HLTUgqKQ4oS3qE3nwiblOmaCvaJfACJOteP0bukwQmTJX4UQ/B9PPRYo6YYLDyDUjziVUbNNgCNlEvIzm1drQVUSNLeZCYiqzH7emENTnmds8yxTPhICRvxy1i5DU+xXhMHkThzjSzrTFrGkto7+OwYLRrd1ihp4GKWDEMuKFnv+Cq4hovj7QEo3vpmeK+Qsl11U0UJeItQTTwoTnFqIRO4Sd5+jtQ1bIQoIp0k//+2OmRtlVzRA4jr5jm8CEcpEQubrBYfMHkR3bTQKBTDu9R4qVbGBwM8dpKFCv3vlyc92FTDHiAIZavEjRgjEcomQQQtyYarmimmkehqz6oYQjIpiwgZxupbs4yU+2VmHjSGK4e3U4H8MDXoxH4ViKCWqILFJTM8Uk+5VhLi2laEEfRQwVRVsY0PmM5iBSzXUy/cx4LSMnQzXniTh2PAoPhyA1bBREBsVSIMYQykJrBeT04M/SBlObgKdEBxV+KBr70dxITBmKRhFm6BW/85RNsc+TVY8iwHL56gI86Hl7yQ6O28rZQ8oQw6btYu0xV/o0Z7YgxxbWObykNvsBzmpakUVq8g7NlYBhs4vtUjFnhwaH73N16yBvIAo6BGhgEPiN3tMyhKIRBAxHSNDIXTHlcZZFTG6s6d0USwAyB6I1WTkK7Z6D7bF2utdmzyPRreMvQTZ0nVw8zganh4OVWtL4BRHbKXRkAYmGaGFcqpow9wyRWsoTBrpncmTk3/EiboKu1d3PeE0NQytjfZAF3NtZih8wwyic9+aD0EuStLePDIRoEg8Mm/wQx7LU8b5ma9iQgjyJvzBkmOJDMNEgUPeWrQMbCaY+x8SNNb0tqOcPUEPbe9w7bOGkkCDHVg4vp7yA0XRZ54wGbLhvlqTfE6tw8cGF5kgTXhwqyI4aDgvJUb1vKmn3xTiMomJhTS0y0v8C4gOoznSCAtyfhvposR9sjEIysxJGSjcAK/bCAr2jMMlQYz6L5vDmiO0dE15hoMYc4iUWSmgmEWr+aUsIUG4g6CVSVEVDn9qOFFKmbLaNbT7dP2yCYhR7/ifqJP2RHZg4rXa2pQaOb/qf1+x5g3WvNmZq1tCoCm0c7aFfwwxaOoarCWg5W5MAp1aZwJxh2xvcczL9iGzgvbco11DTXJL2Vi1/ij3rnA9Mb+I9Avocz6DgFO61z3npK2zKk9TM+JTdFjS9c0BemjpaA7hcQT8w52xQR2vXXn+e3ayJOB6oiLWkCa1keDWo7DM+tgi7OLoyGxB+XQUNYI3ZVgtFSOixJMJhJaj0VdEVphBqEJQfUTdPfu4drVnbH+9JVeUYsb2JO/gwZIhFVvU3b0ls9QzGkUxe/mCHRSE7mIjpwCsiq6853b0BrZ7s7fRQRy/ENVDRylYVRVg1UfU2BQ2KOXyX5jDe1iuj190WZEC7XcvYqXW6M0PxfvqsuIPArPEZm7YUZGXWdzZ9G2WYrY3p9GeavzmvPS52J6nZn4iaR1IedJMFlY2h1e0pspdtiVwZdgO3hpy3UVBQ2m7NXo+r0zPU7ZrbZrvVQC8WZTmnTu8vVO+tE02VezU7uirTMbTsWk9W/Q6cQte28zqPuxv0/uBM9A6hETRVmczmtuP/5YsMndZ8MdFUzd+qLrfdeQkPcNOnM070H5IIimoYk2F3yutbGOq83R1ODENV/CN6iCYKvX4J6TGY9ihQNHxcRVTbiguBwbzfn9p2q9Wy7Wm/P6+NhrOJ3DZEJfztsjgYTp2iabwAZ1obtAOZrJ5ekWVRxAOGRFGWFUXTwt8CMm9PRn3rjZx3bba6C0EURcozfj5UHIQIGv1ObdZNMMIlh85Pa4uBq6kqCoySJcgXfxUETVMUVdXcwaw2bTlFP2wO6FbT7tJFt+gNJq5LlVEgrjsZ9BbDUa1rN603J7gtMMMo+mH+4A/+4Hfif8UxMu5SMbZWAAAAAElFTkSuQmCC'
            userAvatar='data:image/png;base64,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'
    
            // Cores dos diálogos //
            botFontColor={ '#FFFDF8' } 
            userFontColor={ '#FFFDF8' }
            botBubbleColor={ '#E89984' } 
            userBubbleColor={ '#FFC286' }
    
            // Cores do fundo do chat //
            style={{ backgroundColor: '#cca6dd', marginTop: 2 }}
            contentStyle={{ backgroundColor: '#cca6dd' }}
    
            // Estilo do Rodapé (Footer) //
            footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
            submitButtonStyle={{ backgroundColor: '#E89984', borderRadius: 4, width: 63, margin: 2 }}
          />
    );
}
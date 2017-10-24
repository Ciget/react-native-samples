import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class DownloadFile extends Component{
    constructor(props){
        super(props);
        const jobId = -1;
    }

    startDownload(){


    }

    download()
    {
      if (jobId !== -1) {
        this.setState({ output: 'A download is already in progress' });
      }
  
      const progress = data => {
        const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
        const text = `Progress ${percentage}%`;
        this.setState({ output: text });
      };
  
      const begin = res => {
        this.setState({ output: 'Download has begun' });
      };
  
      const progressDivider = 1;
  
      this.setState({ imagePath: { uri: '' } });
  
      // Random file name needed to force refresh...
      const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.jpg`;
  
      const ret = RNFS.downloadFile({ fromUrl: url, toFile: downloadDest, begin, progress, background, progressDivider });
  
      jobId = ret.jobId;
  
      ret.promise.then(res => {
        this.setState({ output: JSON.stringify(res) });
        this.setState({ imagePath: { uri: 'file://' + downloadDest } });
  
        jobId = -1;
      }).catch(err => {
        this.showError(err)
  
        jobId = -1;
      });
    }

    render(){
        return (<View>
            <TouchableOpacity onPress={this.startDownload}>
                <Text>Start download</Text>
                </TouchableOpacity>
        </View>)
    }
}
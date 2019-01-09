//
//  RNTMapView.h
//  TestProj
//
//  Created by Alexander Kovtun on 1/9/19.
//  Copyright © 2019 Facebook. All rights reserved.
//
//
//#ifndef RNTMapView_h
//#define RNTMapView_h
//
//
//#endif /* RNTMapView_h */

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

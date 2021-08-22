/**
 * @fileoverview gRPC-Web generated client stub for services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.services = require('./pingpong.service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.services.PingPongClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.services.PingPongPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.PingRequest,
 *   !proto.services.PongResponse>}
 */
const methodDescriptor_PingPong_Ping = new grpc.web.MethodDescriptor(
  '/services.PingPong/Ping',
  grpc.web.MethodType.UNARY,
  proto.services.PingRequest,
  proto.services.PongResponse,
  /**
   * @param {!proto.services.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.PongResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.PingRequest,
 *   !proto.services.PongResponse>}
 */
const methodInfo_PingPong_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.PongResponse,
  /**
   * @param {!proto.services.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.PongResponse.deserializeBinary
);


/**
 * @param {!proto.services.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.services.PongResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.PongResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.PingPongClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.PingPong/Ping',
      request,
      metadata || {},
      methodDescriptor_PingPong_Ping,
      callback);
};


/**
 * @param {!proto.services.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.PongResponse>}
 *     Promise that resolves to the response
 */
proto.services.PingPongPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.PingPong/Ping',
      request,
      metadata || {},
      methodDescriptor_PingPong_Ping);
};


module.exports = proto.services;


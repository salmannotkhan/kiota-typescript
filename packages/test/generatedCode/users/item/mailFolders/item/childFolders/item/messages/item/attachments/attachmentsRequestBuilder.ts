import {AttachmentCollectionResponse} from '../../../../../../../../../models/';
import {Attachment} from '../../../../../../../../../models/attachment';
import {createAttachmentCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../models/createAttachmentCollectionResponseFromDiscriminatorValue';
import {createAttachmentFromDiscriminatorValue} from '../../../../../../../../../models/createAttachmentFromDiscriminatorValue';
import {deserializeIntoAttachment} from '../../../../../../../../../models/deserializeIntoAttachment';
import {serializeAttachment} from '../../../../../../../../../models/serializeAttachment';
import {AttachmentsRequestBuilderGetRequestConfiguration} from './attachmentsRequestBuilderGetRequestConfiguration';
import {AttachmentsRequestBuilderPostRequestConfiguration} from './attachmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AttachmentItemRequestBuilder} from './item/attachmentItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments
 */
export class AttachmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * The Count property
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item.messages.item.attachments.item collection
     * @param attachmentId Unique identifier of the item
     * @returns a AttachmentItemRequestBuilder
     */
    public byAttachmentId(attachmentId: string) : AttachmentItemRequestBuilder {
        if(!attachmentId) throw new Error("attachmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attachment%2Did"] = attachmentId
        return new AttachmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/attachments{?%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of attachment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/eventmessage-list-attachments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttachmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<AttachmentCollectionResponse>(requestInfo, createAttachmentCollectionResponseFromDiscriminatorValue, undefined);
    };
    /**
     * Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource.  You can add an attachment to an existing message by posting to its attachments collection, or you can add an attachment to a message that is being created and sent on the fly. This operation limits the size of the attachment you can add to under 3 MB.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Attachment
     * @see {@link https://docs.microsoft.com/graph/api/message-post-attachments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Attachment | undefined, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<Attachment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<Attachment>(requestInfo, createAttachmentFromDiscriminatorValue, undefined);
    };
    /**
     * Retrieve a list of attachment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttachmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource.  You can add an attachment to an existing message by posting to its attachments collection, or you can add an attachment to a message that is being created and sent on the fly. This operation limits the size of the attachment you can add to under 3 MB.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Attachment | undefined, requestConfiguration?: AttachmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAttachment);
        return requestInfo;
    };
}
